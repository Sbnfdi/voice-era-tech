// Design Tokens for Voice Era Tech LLC
export const colors = {
  // Dark mode foundation
  midnight: '#050A14',
  darkNavy: '#070D1C',
  navy: '#0A1628',
  navyMid: '#0D1F3C',
  navyLight: '#112244',

  // Primary accent
  electricBlue: '#0066FF',
  electricBlueBright: '#0080FF',
  royalBlue: '#1A4FCC',

  // Cyan accents
  cyan: '#00D4FF',
  cyanDim: '#00A8CC',
  cyanMuted: '#006680',

  // Violet secondary
  violet: '#6B21E8',
  violetMid: '#7C3AED',
  violetLight: '#8B5CF6',

  // Text
  white: '#FFFFFF',
  offWhite: '#F0F4FF',
  textPrimary: '#E8EEFF',
  textSecondary: '#8BA3CC',
  textMuted: '#4A6A99',

  // Light mode
  lightBg: '#F7F9FF',
  lightSurface: '#FFFFFF',
  lightNavy: '#0A1628',
  lightBlue: '#0066FF',
  lightCyan: '#00A8CC',

  // Status
  success: '#00E5A0',
  warning: '#FFB800',
  error: '#FF3B5C',
  active: '#00FF88',
} as const;

export const fonts = {
  sans: '"Inter", "Plus Jakarta Sans", system-ui, sans-serif',
  display: '"Plus Jakarta Sans", "Inter", system-ui, sans-serif',
  mono: '"JetBrains Mono", "Fira Code", "Courier New", monospace',
} as const;

export const animations = {
  fast: '150ms',
  normal: '300ms',
  slow: '600ms',
  slower: '1000ms',
  easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;
