import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";



import {
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";


import {
  CssBaseline,
} from "@mui/material";


import {
  getTheme,
} from "../theme/theme";






type ThemeMode = "light" | "dark";





type ThemeContextType = {


  mode: ThemeMode;


  toggleTheme: () => void;


};







const ThemeContext = createContext<

  ThemeContextType | undefined

>(undefined);








type ThemeProviderProps = {

  children: ReactNode;

};









export function ThemeProvider({

  children,

}: ThemeProviderProps) {



  const [

    mode,

    setMode,

  ] = useState<ThemeMode>(() => {


    const savedMode =

      localStorage.getItem(
        "theme-mode"
      );



    return savedMode === "dark"

      ? "dark"

      : "light";


  });









  const toggleTheme = () => {


    setMode((previousMode) => {


      const newMode =

        previousMode === "light"

          ? "dark"

          : "light";



      localStorage.setItem(

        "theme-mode",

        newMode

      );



      return newMode;


    });


  };









  const theme = useMemo(

    () => getTheme(mode),

    [mode]

  );








  return (


    <ThemeContext.Provider


      value={{

        mode,

        toggleTheme,

      }}


    >


      <MuiThemeProvider

        theme={theme}

      >


        <CssBaseline />


        {children}


      </MuiThemeProvider>


    </ThemeContext.Provider>


  );

}









export function useThemeMode() {


  const context = useContext(

    ThemeContext

  );




  if (!context) {


    throw new Error(

      "useThemeMode must be used inside ThemeProvider"

    );


  }




  return context;


}