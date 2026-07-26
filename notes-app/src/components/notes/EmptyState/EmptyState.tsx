import {
  Box,
  Typography,
} from "@mui/material";


export default function EmptyState() {


  return (

    <Box>

      <Typography 
        sx={{
          position: 'absolute',
          top : '50%',
          left : '50%',
          transform: 'translate(-50%, -50%)',
        }} 
        variant="h6"
        >
        No notes available
      </Typography>


    </Box>

  );

}