export const PorterColors = {
  // Primary Brand Colors
  navyBlue: '#0B2A4A',
  midnightBlue: '#123E6B',
  
  // Secondary Colors  
  iceGray: '#DCE4EE',
  slateGray: '#8A96A3',
  charcoalBlack: '#0E0F12',
  
  // Accent Colors
  evergreen: '#4E6F64',
  steelBlue: '#6FA3C8',
  
  // System Colors
  white: '#FFFFFF',
  background: '#F8F9FA',
  
  // Status Colors
  success: '#4E6F64',
  error: '#DC3545',
  warning: '#FFC107',
  info: '#6FA3C8',
} as const;

export type PorterColorKeys = keyof typeof PorterColors;