const headerHeight = "5rem";
const smoke = "#F5F5F5";
const eerie = "#261C15";
const moss = "#58641D";
const sapphire = "#176087";
const lightGray = "#EDEDED";

module.exports = {
  theme: {
    colors: {
      light: smoke,
      dark: eerie,
      accent1: sapphire,
      accent2: moss,
      transparent: "transparent",
      gray: lightGray
    },
    fontFamily: {
      title: ["Spartan", "Helvetica", "san serif"],
      body: ["Roboto", "Helvetica", "san serif"],
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
