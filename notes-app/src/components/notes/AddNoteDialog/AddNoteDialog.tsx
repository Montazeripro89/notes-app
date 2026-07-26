import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

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

};





export default function AddNoteDialog({

  open,

  onClose,

  onSave,

}: AddNoteDialogProps) {



  const [
    title,
    setTitle,
  ] = useState("");



  const [
    content,
    setContent,
  ] = useState("");







  const handleSubmit = () => {

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


  };







  return (

    <Dialog

      open={open}

      onClose={onClose}

    >


      <DialogTitle>

        Add Note

      </DialogTitle>





      <DialogContent>


        <TextField

          fullWidth

          margin="normal"

          label="Title"

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

          label="Content"

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



        


      <DialogActions>


        <Button

          onClick={onClose}

        >

          Cancel

        </Button>





        <Button

          variant="contained"

          onClick={handleSubmit}

        >

          Save

        </Button>



      </DialogActions>



    </Dialog>

  );

}