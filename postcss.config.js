const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ],
    theme: {
        extend: {
          width: {
            '6/8': '48.666667%',
          }
        }
      }
};