/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      colors: {
        habit: {
          bg: '#02030a', // Deep Void Black
          card: '#0d0c22', // Dark Violet Glass base
          primary: '#3b82f6', // Blue-500
          secondary: '#8b5cf6', // Violet-500
        }
      },
      backgroundImage: {
        'habit-gradient': 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
      },
    },
  },
  plugins: [],
};