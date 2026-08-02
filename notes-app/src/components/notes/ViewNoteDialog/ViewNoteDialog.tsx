import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@mui/material";

import type {
  Note,
} from "../../../types/Note";



type ViewNoteDialogProps = {

  open: boolean;

  note: Note | null;

  onClose: () => void;

  behavior: boolean

};



export default function ViewNoteDialog({

  open,

  note,

  onClose,

  behavior

}: ViewNoteDialogProps) {


  if (!note) return null;



  return (

    <Dialog

      open={open}

      onClose={onClose}

      fullWidth

      maxWidth="sm"

    >

      <DialogTitle>

        {note.title}

      </DialogTitle>



      <DialogContent dividers>

        <Typography
          sx={{
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >

          {note.content}

        </Typography>



        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            display: "block",
            mt: 3,
          }}
        >

          {new Date(note.createdAt).toLocaleString("fa-IR")}

        </Typography>

      </DialogContent>



      <DialogActions
        sx={{
          justifyContent: "center",
        }}
      >

        <Button
          variant="contained"
          onClick={onClose}
        >

          {
            behavior

            ? "واقعاً بهره بردیم"

            : "بستن"
          }

        </Button>

      </DialogActions>

    </Dialog>

  );

}