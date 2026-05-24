import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // ─── BRAND COLORS ────────────────────────────────────────────────
      colors: {
        navy: {
          DEFAULT: '#002855',
          50:  '#e6edf5',
          100: '#c0d0e6',
          200: '#96b0d5',
          300: '#6c90c4',
          400: '#4a77b8',
          500: '#2860ad',
          600: '#1e54a0',
          700: '#134690',
          800: '#073880',
          900: '#002855',
          950: '#001a3a',
        },
        gold: {
          DEFAULT: '#E0A106',
          50:  '#fdf8e7',
          100: '#faefc3',
          200: '#f7e49b',
          300: '#f3d973',
          400: '#f0cf50',
          500: '#E0A106',
          600: '#c48d05',
          700: '#a87804',
          800: '#8d6403',
          900: '#6b4c02',
          950: '#3d2b01',
        },
        ivory: {
          DEFAULT: '#EDE4CD',
          50:  '#faf8f4',
          100: '#f5f0e8',
          200: '#EDE4CD',
          300: '#e3d6b0',
          400: '#d4be88',
          500: '#c5a660',
          600: '#a68840',
          700: '#856c30',
          800: '#635124',
          900: '#40341a',
        },
        // Dark backgrounds
        dark: {
          DEFAULT: '#0a0d14',
          surface: '#111827',
          card: '#1a2235',
          border: '#2a3347',
          muted: '#374151',
        },
        // Text
        text: {
          primary: '#f9fafb',
          secondary: '#9ca3af',
          muted: '#6b7280',
        },
      },

      // ─── TYPOGRAPHY ──────────────────────────────────────────────────
      fontFamily: {
        display: ['var(--font-bebas)', 'Anton', 'Impact', 'sans-serif'],
        heading: ['var(--font-oswald)', 'Oswald', 'sans-serif'],
        body:    ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono:    ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['clamp(4rem, 10vw, 9rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-xl':  ['clamp(3rem, 7vw, 7rem)',  { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-lg':  ['clamp(2.5rem, 5vw, 5rem)',{ lineHeight: '1.0',  letterSpacing: '-0.01em' }],
        'display-md':  ['clamp(2rem, 4vw, 3.5rem)',{ lineHeight: '1.0',  letterSpacing: '-0.01em' }],
        'display-sm':  ['clamp(1.5rem, 3vw, 2.5rem)',{ lineHeight: '1.1' }],
      },

      // ─── SPACING ────────────────────────────────────────────────────
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
        '120': '30rem',
        '144': '36rem',
        '160': '40rem',
        '180': '45rem',
        '200': '50rem',
      },

      // ─── SHADOWS ────────────────────────────────────────────────────
      boxShadow: {
        'gold-sm':   '0 2px 8px rgba(224, 161, 6, 0.25)',
        'gold-md':   '0 4px 20px rgba(224, 161, 6, 0.35)',
        'gold-lg':   '0 8px 40px rgba(224, 161, 6, 0.45)',
        'gold-glow': '0 0 60px rgba(224, 161, 6, 0.6)',
        'navy-sm':   '0 2px 8px rgba(0, 40, 85, 0.25)',
        'navy-md':   '0 4px 20px rgba(0, 40, 85, 0.4)',
        'navy-lg':   '0 8px 40px rgba(0, 40, 85, 0.6)',
        'dark-card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'dark-lg':   '0 8px 48px rgba(0, 0, 0, 0.6)',
        'inset-gold':'inset 0 1px 0 rgba(224, 161, 6, 0.3)',
      },

      // ─── BORDER RADIUS ──────────────────────────────────────────────
      borderRadius: {
        'xl2': '1rem',
        'xl3': '1.5rem',
        'xl4': '2rem',
      },

      // ─── ANIMATIONS ─────────────────────────────────────────────────
      animation: {
        'fade-up':      'fadeUp 0.7s ease-out both',
        'fade-in':      'fadeIn 0.5s ease-out both',
        'slide-in-left':'slideInLeft 0.7s ease-out both',
        'slide-in-right':'slideInRight 0.7s ease-out both',
        'scale-in':     'scaleIn 0.5s ease-out both',
        'shimmer':      'shimmer 2s linear infinite',
        'pulse-gold':   'pulseGold 2s ease-in-out infinite',
        'marquee':      'marquee 30s linear infinite',
        'marquee-rev':  'marqueeReverse 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%':   { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(224, 161, 6, 0.4)' },
          '50%':      { boxShadow: '0 0 40px rgba(224, 161, 6, 0.8)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },

      // ─── BACKGROUND IMAGE ────────────────────────────────────────────
      backgroundImage: {
        'gradient-radial':   'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient':     'linear-gradient(180deg, rgba(0,20,50,0.85) 0%, rgba(0,10,30,0.95) 100%)',
        'gold-gradient':     'linear-gradient(135deg, #E0A106 0%, #f5c842 50%, #E0A106 100%)',
        'navy-gradient':     'linear-gradient(135deg, #002855 0%, #1a3a6b 50%, #002855 100%)',
        'card-gradient':     'linear-gradient(135deg, rgba(26,34,53,0.9) 0%, rgba(10,13,20,0.9) 100%)',
        'shimmer-gradient':  'linear-gradient(90deg, transparent 0%, rgba(224,161,6,0.15) 50%, transparent 100%)',
      },

      // ─── BACKDROP BLUR ───────────────────────────────────────────────
      backdropBlur: {
        xs: '2px',
      },

      // ─── SCREEN BREAKPOINTS ──────────────────────────────────────────
      screens: {
        xs: '480px',
      },

      // ─── TRANSITION ──────────────────────────────────────────────────
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
      },
    },
  },
  plugins: [],
}

export default config
