/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,jsx,tsx,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [import('@tailwindcss/forms'),],
}

