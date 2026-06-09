import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#01655C',
          navy: '#0B1120',
          white: '#F8FAFC',
          slate: '#64748B',
          mint: '#6EE7D8'
        }
      },
      fontFamily: {
        heading: ['Space Grotesk', 'Inter', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        premium: '0 24px 80px rgba(15, 23, 42, 0.12)',
        glow: '0 0 0 1px rgba(110, 231, 216, 0.18), 0 18px 60px rgba(1, 101, 92, 0.22)'
      }
    }
  },
  plugins: []
} satisfies Config;
