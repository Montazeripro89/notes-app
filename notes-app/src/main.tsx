import React from "react";


import ReactDOM from "react-dom/client";


import App from "./App";


import {
  NotesProvider,
} from "./context/NotesContext";


import {
  ThemeProvider,
} from "./context/ThemeContext";



import "./styles/globals.css";







ReactDOM.createRoot(

  document.getElementById("root")!

).render(


  <React.StrictMode>


    <ThemeProvider>


      <NotesProvider>


        <App />


      </NotesProvider>


    </ThemeProvider>


  </React.StrictMode>


);