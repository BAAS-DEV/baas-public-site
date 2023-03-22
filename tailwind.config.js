/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
  daisyui: {
    // themes: ["business"],
    themes: [
      {
        mytheme: {
          primary: "#1C4F82",

          secondary: "#7D919B",

          accent: "#FCA311",

          neutral: "#23282F",

          "base-100": "#FFFFFF",

          info: "#0092D6",

          success: "#6CB288",

          warning: "#DAAD58",

          error: "#AB3D30",
        },
      },
    ],
  },
};
