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
        height: 55
      }}

    >

      <Toolbar>


        <Typography

          variant="h6"

          sx={{
            position: 'absolute',
            top : 25,
            left : 50,
            transform: 'translate(-51%, -51%)',
            flexGrow: 1,
          }}

        >

          نبشت

        </Typography>


      </Toolbar>


    </AppBar>

  );

}