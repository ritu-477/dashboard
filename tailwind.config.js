/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1188px",
          xxl: "1440px",
        },
      },
      colors: {
        'cream': "#eae9e3",
        'yellow': "#ffed00",
      },
      fontFamily: {
        'open': "open sans , sans serif",
      },
      fontSize: {
        'custom3xl': "26px",
        'custom2xl': "21px",
      },
    },
  },
  plugins: [],
}

