// export default {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//     'tailwindcss-gradients': {},
//   },
// }

module.exports = ({ env }) => ({
  plugins: [require("tailwindcss")(), require("autoprefixer")()],
});
