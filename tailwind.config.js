/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/Users/supercoder/SuperCode/JAVA/Projekts/Legender_Battle/LB_Frontend/src/assets/images/cade-roberts-EpIUbeFrqwQ-unsplash.jpg')",
      },
    },
    plugins: [
      require('daisyui'),
    ],
  },
};
