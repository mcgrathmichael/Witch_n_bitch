/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    daisyui: {
      themes: [
        "light",
        "dark",
        "cupcake",

        "synthwave",
        "cyberpunk",
        "valentine",

        "aqua",
        "lofi",

        "acid",

        "night",
      ],
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography"),
  ],
};
