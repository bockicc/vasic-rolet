import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0A0B0D',
        'background-secondary': '#111318',
        surface: '#16181D',
        'surface-border': '#2A2D34',
        'text-primary': '#F5F4F1',
        'text-muted': '#9A9CA3',
        'accent-gold': '#5A7080',
        'accent-bronze': '#3D5260',
        'accent-steel': '#7A8A98',
        'accent-warm': '#7A7068',
        'accent-success': '#5C8A6B',
        divider: '#22242A',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-sm': ['40px', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        display: ['72px', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'heading-2': ['48px', { lineHeight: '1.1' }],
        'heading-2-sm': ['32px', { lineHeight: '1.1' }],
        'heading-3': ['24px', { lineHeight: '1.3' }],
        'heading-3-sm': ['20px', { lineHeight: '1.3' }],
        'body-lg': ['19px', { lineHeight: '1.6' }],
        'body-base': ['16px', { lineHeight: '1.6' }],
        'label-sm': ['12px', { lineHeight: '1.2', letterSpacing: '0.15em' }],
        'btn-base': ['15px', { lineHeight: '1.2', letterSpacing: '0.02em' }],
      },
      borderRadius: {
        xs: '4px',
        sm: '12px',
        md: '20px',
        lg: '28px',
      },
      boxShadow: {
        premium: '0 1px 2px rgba(0,0,0,0.4), 0 20px 40px -12px rgba(0,0,0,0.6)',
        'premium-hover':
          '0 1px 2px rgba(0,0,0,0.4), 0 24px 48px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(90,112,128,0.35)',
        'accent-glow': '0 0 0 1px rgba(90,112,128,0.35)',
        glass: '0 4px 30px rgba(0,0,0,0.3)',
      },
      maxWidth: {
        content: '1280px',
      },
      spacing: {
        'section-y': '140px',
        'section-y-sm': '80px',
        'gutter': '64px',
        'gutter-sm': '24px',
      },
    },
  },
  plugins: [],
} satisfies Config
