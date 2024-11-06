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
        'opensans': "open sans , sans serif",
      }
    },
  },
  plugins: [],
}

