const headerHeight = "5rem";

const lightGray = "#EDEDED";
const raisinblack = "#262626";
const rubyred = "#a20021";
const cosmiclatte = "#fff8e8";
const russianviolet = "#240b36";


module.exports = {
  theme: {
    colors: {
      light: cosmiclatte,
      dark: raisinblack,
      accent1: rubyred,
      accent2: russianviolet,
      transparent: "transparent",
      gray: lightGray
    },
    fontFamily: {
      title: ["Cutive Mono", "Consolas", "Courier", "monospace"],
      body: ["Lora", "Times New Roman", "serif"],
    },
    extend: {
      fontSize: {
        "7xl": "5rem",
        "8xl": "6rem",
      },
      inset: {
        headerHeight: headerHeight,
      },
      maxHeight: {
        lg: "40rem",
      },
      opacity: {
        "80": ".8",
        "90": ".9",
      },
      screens: {
        "xs": '350px',
      },
      spacing: {
        "almost-full": "90vh",
        header: headerHeight,
      },
      transitionProperty: {
        height: "height",
        transform: "transform",
        opacity: "opacity",
      },
    },
  },
  variants: {
    height: ["group-hover", "hover"],
    margin: ["first", "last", "responsive"],
    opacity: ["group-hover"],
    padding: ["first", "last", "responsive"],
    borderStyle: ["last", "responsive"]
  },
};
