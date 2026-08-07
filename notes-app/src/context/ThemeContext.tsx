import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  ThemeProvider as MuiThemeProvider,
  useMediaQuery,
} from "@mui/material";

import type {
  PaletteMode,
} from "@mui/material";

import {
  getTheme,
} from "../theme/theme";


export type ThemeMode =
  | "light"
  | "dark"
  | "system";


type ThemeContextType = {

  themeMode: ThemeMode;

  effectiveMode: PaletteMode;

  setThemeMode: (
    mode: ThemeMode
  ) => void;

  toggleTheme: () => void;

};


const ThemeContext = createContext<
  ThemeContextType | undefined
>(
  undefined
);


type ThemeProviderProps = {

  children: ReactNode;

};


export function ThemeProvider({
  children,
}: ThemeProviderProps) {


  /*
   * تشخیص Theme سیستم عامل
   */
  const systemPrefersDark =
    useMediaQuery(
      "(prefers-color-scheme: dark)"
    );


  /*
   * Theme ذخیره شده
   */
  const [
    themeMode,
    setThemeMode,
  ] = useState<ThemeMode>(() => {

    const saved =
      localStorage.getItem(
        "theme-mode"
      );


    if (
      saved === "light" ||
      saved === "dark" ||
      saved === "system"
    ) {

      return saved;

    }


    return "system";

  });


  /*
   * ذخیره انتخاب کاربر
   */
  useEffect(() => {

    localStorage.setItem(
      "theme-mode",
      themeMode
    );

  }, [
    themeMode,
  ]);


  /*
   * Theme واقعی مورد استفاده اپ
   */
  const effectiveMode =
    useMemo<PaletteMode>(() => {

      if (
        themeMode === "system"
      ) {

        return systemPrefersDark
          ? "dark"
          : "light";

      }


      return themeMode;

    }, [
      themeMode,
      systemPrefersDark,
    ]);


  /*
   * ساخت Theme واقعی MUI
   *
   * این قسمت مهم‌ترین اصلاح است.
   */
  const muiTheme =
    useMemo(() => {

      return getTheme(
        effectiveMode
      );

    }, [
      effectiveMode,
    ]);


  /*
   * تغییر Theme
   */
  const toggleTheme =
    useCallback(() => {

      switch (themeMode) {

        case "system":

          setThemeMode(
            effectiveMode === "dark"
              ? "light"
              : "dark"
          );

          break;


        case "light":

          setThemeMode("dark");

          break;


        case "dark":

          setThemeMode("light");

          break;

      }

    }, [
      themeMode,
      effectiveMode,
    ]);


  return (

    <MuiThemeProvider
      theme={muiTheme}
    >

      <ThemeContext.Provider
        value={{
          themeMode,
          effectiveMode,
          setThemeMode,
          toggleTheme,
        }}
      >

        {children}

      </ThemeContext.Provider>

    </MuiThemeProvider>

  );

}


export function useThemeMode() {

  const context =
    useContext(
      ThemeContext
    );


  if (!context) {

    throw new Error(
      "useThemeMode must be used inside ThemeProvider"
    );

  }


  return context;

}