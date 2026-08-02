import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";

import type {
  ReactNode,
} from "react";

import {
  useMemo,
} from "react";

import {
  faIR,
} from "@mui/material/locale";

import {
  useThemeMode,
} from "../context/ThemeContext";

import {
  typography,
} from "./typography";



type AppThemeProviderProps = {

  children: ReactNode;

};



export default function AppThemeProvider({

  children,

}: AppThemeProviderProps) {



  const {

    effectiveMode,

  } = useThemeMode();




  const theme =
    useMemo(() =>

      createTheme(

        {

          direction: "rtl",


          palette: {

            mode: effectiveMode,

          },


          typography,

        },

        faIR

      ),

      [

        effectiveMode,

      ]

    );





  return (

    <MuiThemeProvider

      theme={theme}

    >

      <CssBaseline />

      {children}

    </MuiThemeProvider>

  );

}