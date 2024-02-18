/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT ({
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.conteudo': {
          minwidth: '350px',
        },
        '.carrousel': {
          display: 'grid',
          gridAutoFlow: 'column',
          scrollBehavior: 'auto',
          gap: '1.2rem',
          overflowY: 'auto',
          overscrollBehaviorX: 'contain',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
        },
        '.carrousel::-webkit-scrollbar': {
          display: 'none',
        },
        '.card': {
          scrollSnapAlign: 'start',
          borderRadius: '30px',
          minHeight: '150px',
          minWidth: '330px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.card:nth-child(odd)': {
          background: 'linear-gradient(-229deg, #FF5733, #FFD133)',
        },
        '.card:nth-child(even)': {
          background: 'linear-gradient(-229deg, #FF5733, #FFD133)',
        },
      });
    },
  ],
});

