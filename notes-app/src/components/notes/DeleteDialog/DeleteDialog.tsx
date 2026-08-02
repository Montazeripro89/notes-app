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

  behavior: boolean

};




export default function DeleteDialog({
  open,
  onClose,
  onConfirm,
  behavior,
}: DeleteDialogProps) {


  return (

    <Dialog

      open={open}

      onClose={onClose}

    >


      <DialogTitle>

        {
          behavior 
          ? "نابود سازی نبشت"
          : "حذف نبشت"
        } 

      </DialogTitle>



      <DialogContent>


        <Typography>

            {
              behavior 
              ? " جداً میخوای این نبشت رو از جمع مطالب ارزشمندتون حذف کنی؟"
              : "آیا از حذف این نبشت مطمئن هستید؟"
            } 

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
          {
            behavior 
            ? "نه‌بابا"
            : "بستن"
          } 
        </Button>

        <Button
          color="error"
          variant="contained"
          onClick={() => {
            onConfirm();
            onClose();
          }}
        >
          {
            behavior 
            ? "نابودش کن"
            : "حذف"
          } 
        </Button>
      </Box>


      </DialogActions>


    </Dialog>

  );

}