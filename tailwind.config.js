/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'custom-blue': '#605BFF',
      },
      spacing: {
        'custom-padding-y': '13.02px',
        'custom-padding-x': '21.71px',
        'custom-gap': '11.58px',
      },
      borderRadius: {
        'custom-radius': '28.94px',
      },
      width: {
        'custom-width': '151.31px',
      },
      height: {
        'custom-height': '61px',
      },
      inset: {
        'custom-top': '114px',
        'custom-left': '122px',
      },
    },
  },
  plugins: [],
}
