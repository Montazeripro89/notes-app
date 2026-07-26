import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";


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

};



export default function EditNoteDialog({
  open,
  note,
  onClose,
  onSave,
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





  const handleSubmit = () => {


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


  };





  return (

    <Dialog

      open={open}

      onClose={onClose}

    >


      <DialogTitle>

        Edit Note

      </DialogTitle>



      <DialogContent>


        <TextField

          fullWidth

          margin="normal"

          label="Title"

          value={title}

          onChange={(e) =>
            setTitle(e.target.value)
          }

        />



        <TextField

          fullWidth

          multiline

          rows={4}

          margin="normal"

          label="Content"

          value={content}

          onChange={(e) =>
            setContent(e.target.value)
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