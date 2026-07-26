import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
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

        Delete Note

      </DialogTitle>



      <DialogContent>


        <Typography>

          Are you sure you want to delete this note?

        </Typography>


      </DialogContent>




      <DialogActions>


        <Button

          onClick={onClose}

        >

          Cancel

        </Button>




        <Button

          color="error"

          variant="contained"

          onClick={() => {

            onConfirm();

            onClose();

          }}

        >

          Delete

        </Button>



      </DialogActions>



    </Dialog>

  );

}