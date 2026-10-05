/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#050505',
          900: '#080808',
          850: '#0B0B0D',
          800: '#111115',
          750: '#15151A',
          700: '#18181B',
          600: '#27272A',
        },
        brand: {
          red: '#E60012',
          'red-bright': '#FF1538',
          'red-dark': '#8A000A',
          'red-glow': 'rgba(230, 0, 18, 0.4)',
        },
        cyber: {
          gray: '#A7A7AD',
          border: '#232329',
          card: '#0E0E12',
        }
      },
      fontFamily: {
        cyber: ['"Chakra Petch"', 'Rajdhani', 'Oswald', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"PingFang SC"', '"Hiragino Sans GB"', '"Microsoft YaHei"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'monospace'],
      },
      backgroundImage: {
        'hero-grid': 'linear-gradient(to right, rgba(230,0,18,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(230,0,18,0.05) 1px, transparent 1px)',
        'cyber-gradient': 'linear-gradient(135deg, rgba(230,0,18,0.15) 0%, rgba(11,11,13,0.95) 60%)',
        'radial-glow': 'radial-gradient(circle at 50% 30%, rgba(230, 0, 18, 0.22) 0%, rgba(5, 5, 5, 0) 70%)',
        'subtle-glow': 'radial-gradient(circle at center, rgba(255, 21, 56, 0.12) 0%, transparent 65%)',
      },
      boxShadow: {
        'red-edge': '0 0 15px rgba(230, 0, 18, 0.35)',
        'red-heavy': '0 0 35px rgba(230, 0, 18, 0.5)',
        'cyber-card': '0 4px 20px -2px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.03)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'radar-sweep': 'radarSweep 12s linear infinite',
      }
    },
  },
  plugins: [],
};
