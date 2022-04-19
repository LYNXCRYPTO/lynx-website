import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

declare module "@material-ui/core/styles/createBreakpoints" {
  interface BreakpointOverrides {
    tiny: true; // adds the small phone breakpoint
  }
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light: "#6398FB",
      main: "#377BFA",
      dark: "#0656EA",
    },
    secondary: {
      light: "#8163FB",
      main: "#8163FB",
      dark: "#3005E1",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#FFF",
    },
  },
  typography: {
    fontFamily: "'Archivo', sans-serif",
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontSize: 35,
      fontFamily: "'Archivo', sans-serif",
      color: "#2A2F72",
    },
    h5: {
      fontSize: 28,
      fontFamily: "'Archivo', sans-serif",
    },
    h6: {
      fontSize: 22,
      lineHeight: 1.25,
      fontFamily: "'Archivo', sans-serif",
    },
    subtitle1: {
      fontSize: 18,
      fontFamily: "'Archivo', sans-serif",
      lineHeight: 1.25,
    },
    subtitle2: {
      fontSize: 16,
      fontFamily: "'Space Grotesk', sans-serif",
    },
    body1: {
      fontSize: 16,
      fontFamily: "'Archivo', sans-serif",
    },
    button: {
      fontSize: 16,
      fontFamily: "'Archivo', sans-serif",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      tiny: 330,
    },
  },
});

export default theme;
