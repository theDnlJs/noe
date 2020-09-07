import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  direction: "rtl",
  typography: {
    fontFamily: [
      "-apple-system",
      "Open Sans Hebrew Condensed",
      '"Open Sans Hebrew CondensedI"',
      "Open Sans Hebrew Condensed",
      '"Open Sans Hebrew Condensed"',
      "Open Sans Hebrew Condensed",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    dark: {
      main: "#000",
    },
  },
});

export default theme;
