import React, { createContext, useContext, type ReactNode } from 'react'

interface ThemeContextType {
  colors: {
    farmNight: '#1E3A1E'
    farmSpark: '#4CAF50'
    farmGold: '#FFA726'
    white: '#FFFFFF'
    grayLight: '#F5F7F5'
    grayDark: '#2C3E2C'
    grayCool: '#7F8D7F'
    success: '#4CAF50'
    error: '#E57373'
    warning: '#FFA726'
    white04: 'rgba(255, 255, 255, 0.4)'
    white06: 'rgba(255, 255, 255, 0.6)'
    white05: 'rgba(255, 255, 255, 0.05)'
    white08: 'rgba(255, 255, 255, 0.08)'
    white10: 'rgba(255, 255, 255, 0.1)'
    white15: 'rgba(255, 255, 255, 0.15)'
    background: '#1E3A1E'
    surface: 'rgba(30, 58, 30, 0.05)'
    text: '#FFFFFF'
    textSecondary: 'rgba(255, 255, 255, 0.4)'
    border: 'rgba(255, 255, 255, 0.1)'
    glow: 'rgba(76, 175, 80, 0.4)'
    surfaceDark: '#1E2E1E'
    borderDark: '#334033'
    textDark: '#E2E8E2'
    textSecondaryDark: '#94A398'
    lightBackground: '#F5F7F5'
    lightSurface: '#FFFFFF'
    lightText: '#1E3A1E'
    lightTextSecondary: '#7F8D7F'
    lightBorder: '#E2E8E2'
  }
  gradients: {
    primary: 'linear-gradient(135deg, #1E3A1E 0%, #4CAF50 100%)'
    secondary: 'linear-gradient(135deg, #4CAF50 0%, #FFA726 100%)'
    sunrise: 'linear-gradient(135deg, #1E3A1E 0%, #FFA726 100%)'
  }
  radius: {
    small: '4px'
    medium: '8px'
    large: '12px'
    xl: '16px'
    card: '12px'
    full: '50%'
    button: '12px'
  }
  font: {
    family: {
      primary: 'Inter, system-ui, sans-serif'
      accent: 'Manrope, Montserrat, sans-serif'
      mono: 'JetBrains Mono, monospace'
    }
    size: {
      h1: '36px'
      h2: '24px'
      h3: '20px'
      body: '16px'
      small: '14px'
      caption: '12px'
      label: '10px'
    }
    weight: {
      light: 300
      regular: 400
      medium: 500
      semiBold: 600
      bold: 700
      extraBold: 800
    }
    tracking: {
      heading: '-0.02em'
      body: '0'
      caption: '+0.05em'
      tech: '+0.1em'
    }
  }
  spacing: {
    xs: '4px'
    sm: '8px'
    md: '12px'
    base: '16px'
    lg: '24px'
    xl: '32px'
    '2xl': '48px'
    '3xl': '64px'
  }
  animation: {
    duration: {
      fast: '150ms'
      normal: '300ms'
      slow: '500ms'
    }
    easing: {
      bounce: 'cubic-bezier(0.34, 1.2, 0.64, 1)'
      standard: 'ease-in-out'
      smooth: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  }
  shadows: {
    card: '0px 4px 12px rgba(0, 0, 0, 0.3)'
    cardLight: '0px 2px 8px rgba(0, 0, 0, 0.04)'
    button: '0px 0px 12px rgba(76, 175, 80, 0.4)'
    success: '0px 0px 16px rgba(76, 175, 80, 0.3)'
    gold: '0px 0px 20px rgba(255, 167, 38, 0.2)'
  }
  breakpoints: {
    sm: '640px'
    md: '768px'
    lg: '1024px'
    xl: '1280px'
    '2xl': '1536px'
  }
  grid: {
    container: '1280px'
    columns: 12
    gutter: '24px'
    padding: '24px'
  }
}

const theme: ThemeContextType = {
  colors: {
    farmNight: '#1E3A1E',
    farmSpark: '#4CAF50',
    farmGold: '#FFA726',
    white: '#FFFFFF',
    grayLight: '#F5F7F5',
    grayDark: '#2C3E2C',
    grayCool: '#7F8D7F',
    success: '#4CAF50',
    error: '#E57373',
    warning: '#FFA726',
    white04: 'rgba(255, 255, 255, 0.4)',
    white06: 'rgba(255, 255, 255, 0.6)',
    white05: 'rgba(255, 255, 255, 0.05)',
    white08: 'rgba(255, 255, 255, 0.08)',
    white10: 'rgba(255, 255, 255, 0.1)',
    white15: 'rgba(255, 255, 255, 0.15)',
    background: '#1E3A1E',
    surface: 'rgba(30, 58, 30, 0.05)',
    text: '#FFFFFF',
    textSecondary: 'rgba(255, 255, 255, 0.4)',
    border: 'rgba(255, 255, 255, 0.1)',
    glow: 'rgba(76, 175, 80, 0.4)',
    surfaceDark: '#1E2E1E',
    borderDark: '#334033',
    textDark: '#E2E8E2',
    textSecondaryDark: '#94A398',
    lightBackground: '#F5F7F5',
    lightSurface: '#FFFFFF',
    lightText: '#1E3A1E',
    lightTextSecondary: '#7F8D7F',
    lightBorder: '#E2E8E2'
  },
  gradients: {
    primary: 'linear-gradient(135deg, #1E3A1E 0%, #4CAF50 100%)',
    secondary: 'linear-gradient(135deg, #4CAF50 0%, #FFA726 100%)',
    sunrise: 'linear-gradient(135deg, #1E3A1E 0%, #FFA726 100%)'
  },
  radius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    xl: '16px',
    card: '12px',
    full: '50%',
    button: '12px'
  },
  font: {
    family: {
      primary: 'Inter, system-ui, sans-serif',
      accent: 'Manrope, Montserrat, sans-serif',
      mono: 'JetBrains Mono, monospace'
    },
    size: {
      h1: '36px',
      h2: '24px',
      h3: '20px',
      body: '16px',
      small: '14px',
      caption: '12px',
      label: '10px'
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800
    },
    tracking: {
      heading: '-0.02em',
      body: '0',
      caption: '+0.05em',
      tech: '+0.1em'
    }
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    base: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px'
  },
  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms'
    },
    easing: {
      bounce: 'cubic-bezier(0.34, 1.2, 0.64, 1)',
      standard: 'ease-in-out',
      smooth: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  },
  shadows: {
    card: '0px 4px 12px rgba(0, 0, 0, 0.3)',
    cardLight: '0px 2px 8px rgba(0, 0, 0, 0.04)',
    button: '0px 0px 12px rgba(76, 175, 80, 0.4)',
    success: '0px 0px 16px rgba(76, 175, 80, 0.3)',
    gold: '0px 0px 20px rgba(255, 167, 38, 0.2)'
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  grid: {
    container: '1280px',
    columns: 12,
    gutter: '24px',
    padding: '24px'
  }
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}