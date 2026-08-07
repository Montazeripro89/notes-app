import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

import type {
  ReactNode,
} from "react";

import ThemeToggle from "../../common/ThemeToggle";

import BehaviorToggle from "../../common/BehaviorToggle";

import {
  useLanguageMode,
} from "../../../hook/useLanguageMode";


type MainLayoutProps = {

  children: (
    behavior: boolean
  ) => ReactNode;

};


export default function MainLayout({

  children,

}: MainLayoutProps) {


  const languageMode =
    useLanguageMode();


  return (

    <Box

      sx={{

        minHeight: "100vh",

        bgcolor: "background.default",

        display: "flex",

        flexDirection: "column",

      }}

    >


      <AppBar

        position="sticky"

        elevation={1}

      >

        <Toolbar

          sx={{

            minHeight: 56,

            position: "relative",

            justifyContent: "flex-start",

            gap: 1,

          }}

        >


          <ThemeToggle />


          <BehaviorToggle

            behavior={
              languageMode.behavior
            }

            onToggle={
              languageMode.handleBehavior
            }

          />


          <Typography

            variant="h6"

            sx={{

              position: "absolute",

              left: "50%",

              transform:
                "translateX(-50%)",

              whiteSpace: "nowrap",

              fontWeight: 700,

            }}

          >

            نبشت

          </Typography>


        </Toolbar>

      </AppBar>


      <Container

        maxWidth="sm"

        disableGutters

        sx={{

          flex: 1,

          width: "100%",

        }}

      >

        <Box

          sx={{

            px: 2,

            py: 2,

            pb: 12,

          }}

        >

          {
            children(
              languageMode.behavior
            )
          }

        </Box>

      </Container>


    </Box>

  );

}