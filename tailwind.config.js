/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617",
        surface: "#0F172A",
        surfaceHigh: "#1E293B",
        accent: "#38BDF8",
        purple: "#8B5CF6",
        cyan: "#22D3EE",
        textPrimary: "#F1F5F9",
        textSecondary: "#94A3B8",
        border: "#1E293B",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 8s infinite ease-in-out',
        'float': 'float 5s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-40px) scale(1.08)' },
          '66%': { transform: 'translate(-20px,20px) scale(0.95)' },
          '100%': { transform: 'translate(0,0) scale(1)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      }
    },
  },
  plugins: [],
}