/**
 * Client-side file processor and intelligent image compressor.
 * Prevents HTTP 413 "Request Entity Too Large" by automatically resizing and compressing
 * large phone camera photos and scans (e.g. 5-10MB down to ~200-300KB) while maintaining
 * crisp legibility for KYC verification documents.
 */

export interface ProcessedDocument {
  name: string;
  type: string;
  size: number;
  data: string; // Base64 data URI
}

export async function processAndCompressFile(
  file: File,
  maxDimension = 1600,
  quality = 0.82
): Promise<ProcessedDocument> {
  // 1. If it's an image (PNG, JPG, JPEG, WEBP), compress using HTML5 canvas
  if (file.type.startsWith("image/") && file.type !== "image/svg+xml") {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const objectUrl = URL.createObjectURL(file);

      img.onload = () => {
        URL.revokeObjectURL(objectUrl);
        let { width, height } = img;

        // Scale down if larger than maxDimension while preserving aspect ratio
        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");

        if (!ctx) {
          readFileFallback(file).then(resolve).catch(reject);
          return;
        }

        // Draw and compress to JPEG for optimal size-to-quality ratio
        ctx.drawImage(img, 0, 0, width, height);
        const compressedDataUrl = canvas.toDataURL("image/jpeg", quality);

        // Calculate approximate byte size from Base64 string
        const base64Content = compressedDataUrl.substring(compressedDataUrl.indexOf(",") + 1);
        const approxSize = Math.round((base64Content.length * 3) / 4);

        const extMatch = file.name.match(/\.([^.]+)$/);
        const originalExt = extMatch ? extMatch[1].toLowerCase() : "";
        const newName =
          originalExt === "jpg" || originalExt === "jpeg"
            ? file.name
            : `${file.name.replace(/\.[^.]+$/, "")}.jpg`;

        resolve({
          name: newName,
          type: "image/jpeg",
          size: approxSize,
          data: compressedDataUrl,
        });
      };

      img.onerror = () => {
        URL.revokeObjectURL(objectUrl);
        readFileFallback(file).then(resolve).catch(reject);
      };

      img.src = objectUrl;
    });
  }

  // 2. If it's a PDF, verify size does not exceed serverless payload thresholds (4.5MB)
  if (file.size > 4.5 * 1024 * 1024) {
    const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
    throw new Error(
      `PDF file "${file.name}" is ${sizeMb} MB. Please upload a compressed PDF under 4.5 MB.`
    );
  }

  return readFileFallback(file);
}

function readFileFallback(file: File): Promise<ProcessedDocument> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve({
          name: file.name,
          type: file.type || "application/octet-stream",
          size: file.size,
          data: reader.result,
        });
      } else {
        reject(new Error(`Failed to read file "${file.name}"`));
      }
    };
    reader.onerror = () => reject(reader.error || new Error("File read error"));
    reader.readAsDataURL(file);
  });
}
