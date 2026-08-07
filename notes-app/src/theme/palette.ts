import type {
  PaletteOptions,
} from "@mui/material";


type AppPaletteOptions = PaletteOptions & {
  footer: {
    main: string;
  };
};


export const lightPalette: AppPaletteOptions = {

  mode: "light",

  primary: {
    main: "#1976d2",
  },

  secondary: {
    main: "#9c27b0",
  },

  background: {
    default: "#f5f5f5",
    paper: "#ffffff",
  },

  text: {
    primary: "#212121",
    secondary: "#757575",
  },

  footer: {
    main: "#1976d2",
  },

};


export const darkPalette: AppPaletteOptions = {

  mode: "dark",

  primary: {
    main: "#90caf9",
  },

  secondary: {
    main: "#ce93d8",
  },

  background: {
    default: "#121212",
    paper: "#1e1e1e",
  },

  text: {
    primary: "#ffffff",
    secondary: "#bdbdbd",
  },

  footer: {
    main: "#1e1e1e",
  },

};