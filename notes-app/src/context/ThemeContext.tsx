import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  useMediaQuery,
} from "@mui/material";

import type {
  PaletteMode,
} from "@mui/material";

import {
  useCallback,
} from "react";



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



  const systemPrefersDark =
    useMediaQuery(
      "(prefers-color-scheme: dark)"
    );



  const [

    themeMode,

    setThemeMode,

  ] = useState<ThemeMode>(() => {

    const saved = localStorage.getItem(
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



  useEffect(() => {

    localStorage.setItem(

      "theme-mode",

      themeMode

    );

  }, [

    themeMode,

  ]);



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

    useEffect(() => {

      if (themeMode !== "system") {

        return;

      }

      const media = window.matchMedia(

        "(prefers-color-scheme: dark)"

      );

      const handleChange = () => {

        // باعث Re-render می‌شود
        setThemeMode("system");

      };

      media.addEventListener(

        "change",

        handleChange

      );

      return () => {

        media.removeEventListener(

          "change",

          handleChange

        );

      };

    }, [

      themeMode,

    ]);



  const toggleTheme = useCallback(() => {

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