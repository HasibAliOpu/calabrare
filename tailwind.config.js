module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["Dancing Script, cursive"],
      },
      borderRadius: {
        full: "50px",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#75e062",

          secondary: "#b78dd6",

          accent: "#f7628a",

          neutral: "#222C35",

          "base-100": "#F9F9FB",

          info: "#37B4CD",

          success: "#16A255",

          warning: "#EBC21E",

          error: "#E97667",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
