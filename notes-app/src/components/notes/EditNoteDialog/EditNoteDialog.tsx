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
  useEffect,
  useState,
} from "react";


import type {
  Note,
} from "../../../types/Note";



type EditNoteDialogProps = {

  open: boolean;

  note: Note | null;

  onClose: () => void;

  onSave: (
    note: Note
  ) => void;

  behavior: boolean

};



export default function EditNoteDialog({
  open,
  note,
  onClose,
  onSave,
  behavior,
}: EditNoteDialogProps) {


  const [title, setTitle] =
    useState("");



  const [content, setContent] =
    useState("");




  useEffect(() => {


    if (note) {

      setTitle(note.title);

      setContent(note.content);

    }


  }, [note]);

  const [

    openBar,

    setOpenBar,

  ] = useState(() => {

    console.log("State Initialized");

    return false;

  });
  
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

      if (!note) {

        return;

      }



      onSave({

        ...note,

        title,

        content,

        updatedAt:
          Date.now(),

      });



      onClose();

    }else{
      handleOpen();
    }
    


  };
  


  return (

    <Dialog

      open={open}

      onClose={onClose}

    >


      <DialogTitle>

        ویرایش نبشت

      </DialogTitle>



      <DialogContent>


        <TextField

          fullWidth

          margin="normal"

          label="عنوان"

          value={title}

          onChange={(e) =>
            setTitle(e.target.value)
          }

        />



        <TextField

          fullWidth

          multiline

          margin="normal"

          label=
            {
              behavior 
              ? "مطلب ارزشمندتون"
              : "متن"
            } 
              

          value={content}

          onChange={(e) =>
            setContent(e.target.value)
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
            ? "ببندش بهره بردیم"
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
        message= "لطفاً تمامی مقادیر را به درستی وارد کنید"
      />

    </Dialog>

  );

}