import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

import Snackbar from '@mui/material/Snackbar';
import type { SnackbarCloseReason } from "@mui/material/Snackbar";

import {
  useState,
} from "react";


import {
  v4 as uuid,
} from "uuid";


import type {
  Note,
} from "../../../types/Note";



type AddNoteDialogProps = {

  open: boolean;


  onClose: () => void;


  onSave: (
    note: Note
  ) => void;

  behavior: boolean

};





export default function AddNoteDialog({

  open,

  onClose,

  onSave,

  behavior,

}: AddNoteDialogProps) {



  const [
    title,
    setTitle,
  ] = useState("");



  const [
    content,
    setContent,
  ] = useState("");

  const [openBar, setOpenBar] = useState(false);

  const handleOpen = () => {
    setOpenBar(true);
  };

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenBar(false);
  };

  const handleSubmit = () => {

    if(title && content !== null) {

      const newNote: Note = {


      id: uuid(),


      title,


      content,


      createdAt: Date.now(),


      updatedAt: Date.now(),


      };



      onSave(newNote);



      setTitle("");

      setContent("");



      onClose();

    }else {
      handleOpen();
    }

    


  };







  return (

    <Dialog

      open={open}

      onClose={onClose}

    >


      <DialogTitle>

        نبشت جدید

      </DialogTitle>





      <DialogContent>


        <TextField

          fullWidth

          margin="normal"

          label="عنوان"

          value={title}

          onChange={(event) =>
            setTitle(
              event.target.value
            )
          }

        />





        <TextField

          fullWidth

          margin="normal"

          label= 
            {
              behavior 
              ? "متن ارزشمندتون"
              : "متن"
            } 

          multiline

          rows={4}

          value={content}

          onChange={(event) =>
            setContent(
              event.target.value
            )
          }

        />


      </DialogContent>
      

      <DialogActions
        sx={{
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Button
          onClick={onClose}
        >
          {
            behavior 
            ? "بی‌خیال"
            : "بستن"
          } 
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          {
            behavior 
            ? "بزار تو دیتا"
            : "ذخیره"
          } 
        </Button>
      </DialogActions>


      <Snackbar
        sx={{
          "& .MuiSnackbarContent-message": {
            width: "100%",
            textAlign: "center",
          },
        }}  
        open={openBar}
        autoHideDuration={3000}
        onClose={handleClose}
        message="لطفاً تمامی مقادیر را به درستی وارد کنید"
      />

    </Dialog>

  );

}