/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FBF8F4',
          100: '#F7F2EB',
          200: '#EFE7D8',
          300: '#E4D6C0',
        },
        ink: {
          900: '#1A1A1A',
          800: '#2B2B2B',
          700: '#3D3D3D',
          600: '#525252',
          500: '#6B6B6B',
          400: '#8A8A8A',
        },
        marigold: {
          50: '#FFF8EC',
          100: '#FFEDCC',
          200: '#FFDFA3',
          300: '#FFCB66',
          400: '#FFB52E',
          500: '#F59E0B',
          600: '#D97D06',
          700: '#B45E09',
          800: '#92480C',
        },
        sage: {
          50: '#F4F6F2',
          100: '#E6EAE0',
          200: '#CDD6C3',
          300: '#AAB89A',
          400: '#889872',
          500: '#6B7C56',
          600: '#546344',
          700: '#424E36',
          800: '#363F2D',
        },
        blueprint: {
          50: '#EAF0F4',
          100: '#D1DEE9',
          200: '#A8C2D6',
          300: '#7AA2BE',
          400: '#5283A2',
          500: '#3A6A88',
          600: '#2D5570',
          700: '#26435A',
          800: '#1F3547',
          900: '#16263A',
        },
        blush: {
          100: '#F9E4DE',
          200: '#F0C9BD',
          300: '#E6A89A',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
        prose: '68ch',
      },
      letterSpacing: {
        tightish: '-0.015em',
        tighter2: '-0.03em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'slide-right': 'slideRight 0.8s ease-out forwards',
        'bloom': 'bloom 1.2s ease-out forwards',
        'draw': 'draw 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bloom: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        draw: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
};
