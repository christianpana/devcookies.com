export default {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['PT Sans', 'sans-serif'],
        serif: ['PT Serif', 'sans-serif'],
      },
      animation: {
        breathe: 'breathe 5s ease-in-out infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
      },
    },
  },

  plugins: [],
};
