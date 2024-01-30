/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sl-primary-green': 'hsla(137, 48%, 72%, 1)',
        'sl-primary-white': 'hsla(0, 0%, 100%, 1)',
        'sl-secondary-white': 'hsla(0, 0%, 100%, 0.8)',
        'sl-primary-black': 'hsla(0, 0%, 0%, 1)',
        'sl-secondary-black': 'hsla(0, 0%, 31%, 1)',
      },
    },
  },
  plugins: [],
}
