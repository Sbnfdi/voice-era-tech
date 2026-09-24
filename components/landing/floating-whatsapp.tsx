"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MessageCircle, X, Send, Sparkles, CheckCheck } from "lucide-react";

const WHATSAPP_NUMBER = "15123332777";

// Authentic WhatsApp SVG Icon
function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

const QUICK_PROMPTS = [
  "Direct CLI Route Rates",
  "Wholesale Interconnect",
  "Predictive Dialer Setup",
  "Technical Support",
];

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [hasUnread, setHasUnread] = useState(true);
  const chatboxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (chatboxRef.current && !chatboxRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
      inputRef.current?.focus();
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      setHasUnread(false);
    }
  };

  const handleSend = (textToSend?: string) => {
    const text = (textToSend !== undefined ? textToSend : message).trim();
    const finalMsg = text || "Hello Voice Era Tech, I would like to inquire about your VoIP routes and dialer solutions.";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setMessage("");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* WhatsApp Chatbox Popup */}
      {isOpen && (
        <div
          ref={chatboxRef}
          role="dialog"
          aria-labelledby="whatsapp-chat-title"
          className="mb-4 w-[340px] sm:w-[380px] rounded-3xl overflow-hidden border border-[#DFB76C]/30 bg-zinc-950/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(37,211,102,0.15)] flex flex-col animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#DFB76C]/40 bg-black flex items-center justify-center shrink-0">
                <Image
                  src="/logo.png"
                  alt="Voice Era Tech"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-black" />
              </div>
              <div>
                <h3
                  id="whatsapp-chat-title"
                  className="text-sm font-display font-medium text-white tracking-tight flex items-center gap-1.5"
                >
                  Voice Era Tech
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </h3>
                <p className="text-[11px] font-mono text-zinc-400">
                  Usually replies in minutes &bull; 24/5 NOC
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              type="button"
              aria-label="Close chat"
              className="w-8 h-8 rounded-full border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="p-4 space-y-4 max-h-[340px] overflow-y-auto bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px]">
            {/* Timestamp */}
            <div className="text-center">
              <span className="px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                Direct WhatsApp Enquiries
              </span>
            </div>

            {/* Agent Message Bubble */}
            <div className="flex items-start gap-2.5 max-w-[90%]">
              <div className="p-3.5 rounded-2xl rounded-tl-sm bg-zinc-900 border border-zinc-800 text-xs sm:text-sm text-zinc-200 leading-relaxed shadow-sm space-y-2">
                <p>
                  Hello! 👋 Welcome to <strong className="text-[#DFB76C]">Voice Era Tech</strong>.
                </p>
                <p className="text-zinc-300">
                  How can our telecom engineering team assist you with VoIP termination, predictive dialers, or wholesale routes today?
                </p>
                <div className="flex items-center justify-end gap-1 text-[10px] font-mono text-zinc-500 pt-1">
                  <span>Direct Desk</span>
                  <CheckCheck className="w-3 h-3 text-emerald-400" />
                </div>
              </div>
            </div>

            {/* Quick Prompt Pills */}
            <div className="space-y-1.5 pt-1">
              <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#DFB76C]" />
                <span>Frequently asked topics:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleSend(`Hello Voice Era Tech, I have an inquiry regarding: ${prompt}`)}
                    type="button"
                    className="px-2.5 py-1 rounded-full bg-zinc-900/90 hover:bg-[#DFB76C]/10 border border-zinc-700/80 hover:border-[#DFB76C]/50 text-[11px] text-zinc-300 hover:text-[#DFB76C] transition-all cursor-pointer text-left"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Input & Send Action */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-zinc-950 border-t border-zinc-800/80 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your inquiry message..."
              className="flex-1 bg-zinc-900/90 border border-zinc-800 rounded-full px-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#DFB76C] focus:ring-1 focus:ring-[#DFB76C]/30 transition-all"
            />
            <button
              type="submit"
              aria-label="Send via WhatsApp"
              className="w-10 h-10 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(37,211,102,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Sub-footer Note */}
          <div className="px-4 py-1.5 bg-zinc-950/80 text-[10px] font-mono text-zinc-500 border-t border-zinc-900 flex items-center justify-between">
            <span>Official WhatsApp: +1 (512) 333-2777</span>
            <span className="text-emerald-500 font-semibold">Online</span>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={handleToggle}
        type="button"
        aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp direct inquiry chat"}
        className="group relative flex items-center gap-2.5 pl-3.5 pr-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black font-semibold text-xs sm:text-sm shadow-[0_10px_30px_rgba(37,211,102,0.45),0_0_15px_rgba(0,0,0,0.5)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        {/* Pulsing ring indicator */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <div className="relative">
          <WhatsAppIcon className="w-6 h-6 text-black drop-shadow-sm" />
          {hasUnread && !isOpen && (
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber-400 border-2 border-black animate-bounce" />
          )}
        </div>

        {/* Text Label on button */}
        <span className="font-display tracking-tight text-black font-bold hidden sm:inline-block">
          Chat on WhatsApp
        </span>
      </button>
    </div>
  );
}
