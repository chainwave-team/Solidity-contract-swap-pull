module.exports = {
  purge: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/styles/**/*.css'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mono: ["'Fira Code', monospace"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
