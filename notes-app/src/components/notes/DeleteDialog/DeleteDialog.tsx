import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";



type DeleteDialogProps = {

  open: boolean;


  onClose: () => void;


  onConfirm: () => void;

};




export default function DeleteDialog({
  open,
  onClose,
  onConfirm,
}: DeleteDialogProps) {


  return (

    <Dialog

      open={open}

      onClose={onClose}

    >


      <DialogTitle>

        حذف نبشت

      </DialogTitle>



      <DialogContent>


        <Typography>

          جداً میخوای این نبشت رو به فنا بدی؟

        </Typography>


      </DialogContent>




      <DialogActions>


      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          width: "100%",
        }}
      >
        <Button onClick={onClose}>
          نه بابا
        </Button>

        <Button
          color="error"
          variant="contained"
          onClick={() => {
            onConfirm();
            onClose();
          }}
        >
          به فنا بده
        </Button>
      </Box>


      </DialogActions>


    </Dialog>

  );

}