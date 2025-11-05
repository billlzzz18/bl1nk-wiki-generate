import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(166, 71%, 47%)',
        accent: 'hsl(166, 71%, 47%)',
        'neutral-bg': { dark: '#0f172a', light: '#f1f5f9' },
        'neutral-surface': { dark: 'rgba(15, 23, 42, 0.85)', light: 'rgba(255, 255, 255, 0.9)' },
      },
      borderRadius: { card: '0.75rem' },
      backdropBlur: { card: '16px' },
    },
  },
}

export default config
