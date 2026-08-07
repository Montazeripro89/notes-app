import {
  useEffect,
  useRef,
  useState,
} from "react";

import AddIcon from "@mui/icons-material/Add";

import {
  Alert,
  Box,
  Fab,
  Snackbar,
} from "@mui/material";

import type {
  SnackbarCloseReason,
} from "@mui/material/Snackbar";

import NoteList from "../NoteList";
import EmptyState from "../EmptyState";
import EditNoteDialog from "../EditNoteDialog";
import DeleteDialog from "../DeleteDialog";
import AddNoteDialog from "../AddNoteDialog";
import Footer from "../../layout/Footer";

import SearchBar from "../../common/SearchBar";
import SortSelect from "../../common/SortSelect";

import {
  useNotes,
} from "../../../context/NotesContext";

import {
  useSearch,
} from "../../../hook/useSearch";

import {
  useSort,
} from "../../../hook/useSort";

import {
  useDialog,
} from "../../../hook/useDialog";

import type {
  SortOrder,
} from "../../../utils/sort";

import type {
  Note,
} from "../../../types/Note";

type NotesContainerProps = {
  behavior: boolean;
};

export default function NotesContainer({behavior} : NotesContainerProps) {

  const {

    notes,

    addNote,

    deleteNote,

    updateNote,

  } = useNotes();

  const [

    openBar,

    setOpenBar,

  ] = useState(false);

  const [

    query,

    setQuery,

  ] = useState("");

  const [

    sortOrder,

    setSortOrder,

  ] = useState<SortOrder>("newest");

  const [

    selectedNote,

    setSelectedNote,

  ] = useState<Note | null>(null);

  const [

    selectedDeleteId,

    setSelectedDeleteId,

  ] = useState<string | null>(null);

  const addDialog =
    useDialog();

  const editDialog =
    useDialog();

  const deleteDialog =
    useDialog();

  const {

    filteredNotes,

  } = useSearch(

    notes,

    query

  );

  const {

    sortedNotes,

  } = useSort(

    filteredNotes,

    sortOrder

  );

  const firstRender =
    useRef(true);

  const handleEdit = (
    note: Note
  ) => {

    setSelectedNote(note);

    editDialog.handleOpen();

  };

  const handleSave = (
    note: Note
  ) => {

    updateNote(note);

    setSelectedNote(null);

    editDialog.handleClose();

  };

  const handleDelete = (
    id: string
  ) => {

    setSelectedDeleteId(id);

    deleteDialog.handleOpen();

  };

  const handleDeleteConfirm = () => {

    if (!selectedDeleteId)
      return;

    deleteNote(selectedDeleteId);

    setSelectedDeleteId(null);

    deleteDialog.handleClose();

  };

  const handleCloseBar = (
    _event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {

    if (reason === "clickaway")
      return;

    setOpenBar(false);

  };

  useEffect(() => {

    if (firstRender.current) {

      firstRender.current = false;

      return;

    }

    setOpenBar(true);

  }, [

    behavior,

  ]);

    return (

    <>

      <Box

        sx={{

          display: "flex",

          alignItems: "center",

          gap: 1.5,

          mb: 2,

        }}

      >

        <SearchBar

          value={query}

          onChange={setQuery}

        />



        <SortSelect

          value={sortOrder}

          onChange={setSortOrder}

        />

      </Box>



      {

        sortedNotes.length === 0

          ?

          <EmptyState />

          :

          <Box

            sx={{

              mt: 1,

            }}

          >

            <NoteList

              notes={sortedNotes}

              onDelete={handleDelete}

              onEdit={handleEdit}

            />

          </Box>

      }

            <AddNoteDialog

        open={addDialog.open}

        onClose={addDialog.handleClose}

        onSave={addNote}

        behavior={behavior}

      />



      <EditNoteDialog

        open={editDialog.open}

        note={selectedNote}

        onClose={() => {

          setSelectedNote(null);

          editDialog.handleClose();

        }}

        onSave={handleSave}

        behavior={behavior}

      />



      <DeleteDialog

        open={deleteDialog.open}

        onClose={() => {

          setSelectedDeleteId(null);

          deleteDialog.handleClose();

        }}

        onConfirm={handleDeleteConfirm}

        behavior={behavior}

      />

      <Footer>

        <Fab

          color="primary"

          onClick={addDialog.handleOpen}

          aria-label="افزودن نبشت"

          sx={{

            position: 'fixed',

            bottom: 30,

            width: 60,

            height: 60,

            minHeight: 60,

            boxShadow: 5,

            bgcolor: 'footer.main',

            transition:
              "transform 0.2s ease, box-shadow 0.2s ease",

            "&:hover": {

              transform: "scale(1.06)",

              boxShadow: 8,

              bgcolor: 'footer.main',

            },

          }}

        >

          <AddIcon />

        </Fab>

      </Footer>

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

          severity="success"

          variant="filled"

          sx={{

            width: "100%",

            borderRadius: 2,

            boxShadow: 4,

          }}

        >

          {

            behavior

              ?

              "خبری نیست؛ فقط «نبشت» باهات پسرخاله شد."

              :

              "دفترچه یادداشت به حالت «مؤدب» درآمد."

          }

        </Alert>

      </Snackbar>

    </>

  );

}