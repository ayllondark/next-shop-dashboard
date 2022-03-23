const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*{html,js,jsx}'], // Para que refleje los estilos de tailwindcss en todas nuesras paginas con esas etensiones
  theme: {
    colors: {
      ...colors,
    },
    //extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
