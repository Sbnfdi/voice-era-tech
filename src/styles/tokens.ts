export const tokens = {
  colors: {
    // Primary Architecture
    obsidian: '#0B0F14',      // Primary background (Dominant 70%)
    slateNavy: '#151D27',     // Secondary background (Sections, mega menus)
    steelBlue: '#202B38',     // Elevated surface (Cards, panels, widgets 15%)
    steelBorder: 'rgba(76, 141, 255, 0.12)', // Subtle card border
    steelBorderHover: 'rgba(49, 87, 213, 0.35)', // Hover border

    // Typography
    ivoryWhite: '#F4F6F8',    // Primary typography (Headlines, primary labels 10%)
    coolGray: '#9AA6B2',      // Secondary typography (Body, descriptions, metadata)
    mutedGray: '#5E6A78',     // Fine details, footers, timestamps

    // Brand & Interactions
    royalBlue: '#3157D5',     // Primary brand accent (CTAs, active states, technology 4%)
    softAzure: '#4C8DFF',     // Interaction accent (Hovers, data illumination, focus)
    
    // Communication & Specialized
    mutedTeal: '#3AAFA9',     // Communication accent (Connected calls, voice signals, success 1%)
    warmGold: '#C9A96E',      // Premium accent (Exclusivity badges, fine dividers, 1%)

    // Utility & Alert
    errorRed: '#D94848',      // Restrained professional error
    warningAmber: '#D99B38',  // Restrained warning

    // Light Mode Support
    light: {
      background: '#F5F7FA',
      surface: '#FFFFFF',
      secondarySurface: '#EAF0F6',
      primaryText: '#10151C',
      secondaryText: '#5E6A78',
      brandBlue: '#3157D5',
      azure: '#4C8DFF',
      teal: '#2F9691',
      gold: '#B58F52',
    }
  },

  gradients: {
    brand: 'linear-gradient(135deg, #3157D5 0%, #4C8DFF 100%)',
    communication: 'linear-gradient(135deg, #3157D5 0%, #3AAFA9 100%)',
    surface: 'linear-gradient(180deg, rgba(32, 43, 56, 0.8) 0%, rgba(21, 29, 39, 0.95) 100%)',
    atmosphericRadial: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(49, 87, 213, 0.08) 0%, transparent 70%)',
    goldAccent: 'linear-gradient(135deg, #C9A96E 0%, #E2C99A 100%)',
  },

  typography: {
    fontDisplay: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontBody: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontMono: '"JetBrains Mono", "SF Mono", Consolas, monospace',
  },

  shadows: {
    card: '0 8px 32px rgba(0, 0, 0, 0.35)',
    cardHover: '0 16px 48px rgba(0, 0, 0, 0.45), 0 0 24px rgba(49, 87, 213, 0.08)',
    buttonPrimary: '0 4px 16px rgba(49, 87, 213, 0.25)',
    buttonPrimaryHover: '0 8px 24px rgba(76, 141, 255, 0.35)',
    elevated: '0 24px 64px rgba(0, 0, 0, 0.55)',
  }
};
