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

    mode,

    toggleTheme,

  } = useThemeMode();







  return (


    <Fab


      color="default"


      onClick={toggleTheme}


      sx={{


        position: "fixed",


        left: 24,


        bottom: 24,


      }}


    >


      {


        mode === "dark"


          ?

          <LightMode />

          :

          <DarkMode />


      }



    </Fab>


  );

}