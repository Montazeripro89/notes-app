import {
  CssBaseline,
} from "@mui/material";

import type {
  ReactNode,
} from "react";


type AppThemeProviderProps = {
  children: ReactNode;
};


export default function AppThemeProvider({
  children,
}: AppThemeProviderProps) {

  return (
    <>
      <CssBaseline />

      {children}
    </>
  );
}