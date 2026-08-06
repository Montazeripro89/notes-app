import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  TextField,
} from "@mui/material";

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

  behavior: boolean;

};

export default function EditNoteDialog({

  open,

  note,

  onClose,

  onSave,

  behavior,

}: EditNoteDialogProps) {

  const [

    title,

    setTitle,

  ] = useState("");



  const [

    content,

    setContent,

  ] = useState("");



  const [

    openBar,

    setOpenBar,

  ] = useState(false);



  useEffect(() => {

    if (note) {

      setTitle(note.title);

      setContent(note.content);

    }

  }, [note]);



  const handleCloseBar = (

    _event: React.SyntheticEvent | Event,

    reason?: SnackbarCloseReason,

  ) => {

    if (reason === "clickaway") {

      return;

    }

    setOpenBar(false);

  };



  const handleSubmit = () => {

    if (

      title.trim() &&

      content.trim()

    ) {

      if (!note) return;

      onSave({

        ...note,

        title,

        content,

        updatedAt: Date.now(),

      });

      onClose();

    } else {

      setOpenBar(true);

    }

  };



  return (

    <>

      <Dialog

        open={open}

        onClose={onClose}

        fullWidth

        maxWidth="sm"

      >

        <DialogTitle

          sx={{

            textAlign: "center",

            fontWeight: 700,

            pb: 1,

          }}

        >

          نبشت

        </DialogTitle>



        <DialogContent

          sx={{

            pt: 2,

          }}

        >

          <TextField

            fullWidth

            margin="normal"

            label="عنوان"

            value={title}

            onChange={(e) =>

              setTitle(

                e.target.value

              )

            }

            sx={{

              "& .MuiOutlinedInput-root": {

                borderRadius: 2,

              },

            }}

          />



          <TextField

            fullWidth

            multiline

            minRows={10}

            margin="normal"

            label={

              behavior

                ? "مطلب ارزشمندتون"

                : "متن"

            }

            value={content}

            onChange={(e) =>

              setContent(

                e.target.value

              )

            }

            sx={{

              "& .MuiOutlinedInput-root": {

                borderRadius: 2,

                alignItems: "flex-start",

              },

            }}

          />

        </DialogContent>



        <DialogActions

          sx={{

            justifyContent: "space-between",

            px: 3,

            pb: 2,

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

      </Dialog>



      <Snackbar

        open={openBar}

        autoHideDuration={3000}

        onClose={handleCloseBar}

        anchorOrigin={{

          vertical: "bottom",

          horizontal: "center",

        }}

      >

        <Alert

          severity="warning"

          sx={{

            width: "100%",

          }}

        >

          لطفاً تمامی مقادیر را به درستی وارد کنید.

        </Alert>

      </Snackbar>

    </>

  );

}