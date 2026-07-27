import {
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";




export default function Header() {


  return (

    <AppBar

      position="static"
      sx={{
        height: '75px'
      }}

    >

      <Toolbar>


        <Typography

          variant="h6"

          sx={{
            position: 'absolute',
            top : '64%',
            left : '51%',
            transform: 'translate(-51%, -51%)',
            flexGrow: 1,
          }}

        >

          Notes App

        </Typography>


      </Toolbar>


    </AppBar>

  );

}