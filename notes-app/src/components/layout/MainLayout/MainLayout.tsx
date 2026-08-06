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



type MainLayoutProps = {

  children: ReactNode;

};



export default function MainLayout({

  children,

}: MainLayoutProps) {

  return (

    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >

      <AppBar
        position="sticky"
        elevation={1}
      >

        <Toolbar
          sx={{
            minHeight: 56,
            justifyContent: "space-between",
            position: "relative",
          }}
        >

          <ThemeToggle />

          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              position: "absolute",
              left: "10%",
              transform: "translateX(-10%)",
            }}
          >
            نبشت
          </Typography>

    {/* Spacer */}

    <Box sx={{ width: 40 }} />

    </Toolbar>

      </AppBar>



      <Container

        maxWidth="sm"

        disableGutters

      >

        <Box

          sx={{

            px: 2,

            py: 2,

          }}

        >

          {children}

        </Box>

      </Container>

    </Box>

  );

}