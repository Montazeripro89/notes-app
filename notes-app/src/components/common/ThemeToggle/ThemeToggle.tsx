import {

  Fab,

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

    <Fab

      color="default"

      onClick={toggleTheme}

      sx={{

        position: "fixed",

        right: 24,

        bottom: 24,

        zIndex: 1000,

      }}

    >

      {

        effectiveMode === "dark"

          ?

          <LightMode />

          :

          <DarkMode />

      }

    </Fab>

  );

}