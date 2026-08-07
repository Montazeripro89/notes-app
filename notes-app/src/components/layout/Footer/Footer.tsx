import {
  Box,
} from "@mui/material";

import type {
  ReactNode,
} from "react";


type FooterProps = {
  children?: ReactNode;
};


export default function Footer({
  children,
}: FooterProps) {

  return (

    <Box
      component="footer"

      sx={{
        position: "fixed",

        left: 0,
        right: 0,
        bottom: 0,

        height: 64,

        backgroundColor: "footer.main",

        borderTop: "1px solid",
        borderColor: "divider",

        zIndex: 1000,

        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",

        pb: 1.5,

        "&::before": {
          content: '""',

          position: "absolute",

          top: -1,
          left: "50%",

          transform: "translateX(-50%)",

          width: 70,
          height: 40,

          backgroundColor: "background.default",

          borderLeft: "1px solid",
          borderRight: "1px solid",
          borderBottom: "1px solid",

          borderColor: "divider",

          borderRadius: "0 0 70px 70px",

          zIndex: 1,
        },

        "& > div": {
          position: "relative",
          zIndex: 2,
        },
      }}
    >

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </Box>

    </Box>

  );
}