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

import {
  useLanguageMode,
} from "../../../hook/useLanguageMode";

import type {
  SortOrder,
} from "../../../utils/sort";

import type {
  Note,
} from "../../../types/Note";

export default function NotesContainer() {

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

  const languageDialog =
    useLanguageMode();

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

    languageDialog.behavior,

  ]);

    return (

    <>

      <Fab

        color="primary"

        onClick={addDialog.handleOpen}

        sx={{

          position: "fixed",

          left: 24,

          bottom: 24,

          width: 60,

          height: 60,

          boxShadow: 5,

          transition: ".25s",

          zIndex: 1000,

          "&:hover": {

            transform: "scale(1.06)",

            boxShadow: 8,

          },

        }}

      >

        <AddIcon />

      </Fab>



      <Fab

        color="info"

        onClick={languageDialog.handleBehavior}

        sx={{

          position: "fixed",

          right: 24,

          bottom: 96,

          width: 56,

          height: 56,

          boxShadow: 4,

          transition: ".25s",

          zIndex: 1000,

          "&:hover": {

            transform: "scale(1.06)",

            boxShadow: 7,

          },

        }}

      >

        {

          languageDialog.behavior

            ?

            <svg

              width="24"

              height="24"

              viewBox="0 0 24 24"

              fill="none"

              xmlns="http://www.w3.org/2000/svg"

            >

              <path

                d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"

                stroke="currentColor"

                strokeWidth="2"

                strokeLinecap="round"

                strokeLinejoin="round"

              />

              <path

                d="M8 10H16"

                stroke="currentColor"

                strokeWidth="2"

                strokeLinecap="round"

              />

              <path

                d="M8 13H13"

                stroke="currentColor"

                strokeWidth="2"

                strokeLinecap="round"

              />

            </svg>

            :

            <svg

              width="24"

              height="24"

              viewBox="0 0 24 24"

              fill="none"

              xmlns="http://www.w3.org/2000/svg"

            >

              <path

                d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"

                stroke="currentColor"

                strokeWidth="2"

                strokeLinecap="round"

                strokeLinejoin="round"

              />

              <circle

                cx="12"

                cy="10"

                r="1.5"

                fill="currentColor"

              />

            </svg>

        }

      </Fab>



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

        behavior={languageDialog.behavior}

      />



      <EditNoteDialog

        open={editDialog.open}

        note={selectedNote}

        onClose={() => {

          setSelectedNote(null);

          editDialog.handleClose();

        }}

        onSave={handleSave}

        behavior={languageDialog.behavior}

      />



      <DeleteDialog

        open={deleteDialog.open}

        onClose={() => {

          setSelectedDeleteId(null);

          deleteDialog.handleClose();

        }}

        onConfirm={handleDeleteConfirm}

        behavior={languageDialog.behavior}

      />



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

            languageDialog.behavior

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