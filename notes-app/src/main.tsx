import React from "react";
import ReactDOM from "react-dom/client";

import { CacheProvider } from "@emotion/react";

import App from "./App";

import "./styles/globals.css";

import rtlCache from "./theme/rtlCache";

import AppThemeProvider from "./theme/ThemeProvider";

import {
  ThemeProvider,
} from "./context/ThemeContext";

import {
  NotesProvider,
} from "./context/NotesContext";



ReactDOM.createRoot(

  document.getElementById("root")!

).render(

  // <React.StrictMode>
  <>
    <CacheProvider value={rtlCache}>

      <ThemeProvider>

        <AppThemeProvider>

          <NotesProvider>

            <App />

          </NotesProvider>

        </AppThemeProvider>

      </ThemeProvider>

    </CacheProvider>
  </>
  // </React.StrictMode>

);