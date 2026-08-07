import {
  createTheme,
} from "@mui/material/styles";

import {
  lightPalette,
  darkPalette,
} from "./palette";

import {
  typography,
} from "./typography";


export const getTheme = (
  mode: "light" | "dark"
) => {

  return createTheme({

    direction: "rtl",

    palette:
      mode === "dark"
        ? darkPalette
        : lightPalette,

    typography,

  });

};