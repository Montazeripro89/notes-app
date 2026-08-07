import {
  IconButton,
} from "@mui/material";

import {
  LightMode,
  DarkMode,
} from "@mui/icons-material";

import {
  useThemeMode,
} from "../../../context/ThemeContext";


export default function ThemeToggle() {

  const {
    effectiveMode,
    toggleTheme,
  } = useThemeMode();


  return (

    <IconButton

      onClick={toggleTheme}

      aria-label={
        effectiveMode === "dark"
          ? "تغییر به حالت روشن"
          : "تغییر به حالت تاریک"
      }

      sx={{

        position: "fixed",

        right: 10,
        top: 8,

        width: 40,
        height: 40,

        color:
          effectiveMode === "dark"
            ? "#ffffff"
            : "#1976d2",

        backgroundColor:
          effectiveMode === "dark"
            ? "#1e1e1e"
            : "#ffffff",

        border: "1px solid",

        borderColor:
          effectiveMode === "dark"
            ? "#444444"
            : "#d0d0d0",

        boxShadow: 1,

        transition:
          "background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease",

        "&:hover": {

          backgroundColor:
            effectiveMode === "dark"
              ? "#2a2a2a"
              : "#f0f6ff",

          color:
            effectiveMode === "dark"
              ? "#ffffff"
              : "#1565c0",

          boxShadow: 3,

        },

        "&:focus-visible": {

          outline: "2px solid",

          outlineColor:
            effectiveMode === "dark"
              ? "#90caf9"
              : "#1976d2",

          outlineOffset: 2,

        },

      }}

    >

      {
        effectiveMode === "dark"

          ?

          <LightMode fontSize="small" />

          :

          <DarkMode fontSize="small" />
      }

    </IconButton>

  );
}