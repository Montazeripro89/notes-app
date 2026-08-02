import {
  useEffect,
  useState,
} from "react";


import AddIcon from '@mui/icons-material/Add';

import {
  Alert,
  Box,
  Fab,
  Snackbar,
} from "@mui/material";

import type { SnackbarCloseReason } from "@mui/material/Snackbar";


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
import ThemeToggle from "../../common/ThemeToggle";



export default function NotesContainer() {


  const {

    notes,

    addNote,

    deleteNote,

    updateNote,

  } = useNotes();


  const [
    
    openBar, 
    
    setOpenBar
  
  ] = useState(false);


  const [

    query,

    setQuery,

  ] = useState("");





  const [

    sortOrder,

    setSortOrder,

  ] = useState<SortOrder>(
    "newest"
  );





  const [

    selectedNote,

    setSelectedNote,

  ] = useState<Note | null>(
    null
  );





  const [

    selectedDeleteId,

    setSelectedDeleteId,

  ] = useState<string | null>(
    null
  );





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



  const handleClose = (
      _event: React.SyntheticEvent | Event,
      reason?: SnackbarCloseReason,
    ) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpenBar(false);
  };



  const handleDeleteConfirm = () => {


    if (!selectedDeleteId) {

      return;

    }



    deleteNote(

      selectedDeleteId

    );



    setSelectedDeleteId(null);



    deleteDialog.handleClose();


  };



  useEffect(() => {
    return () => {
      setOpenBar(true)
    };
  }, [languageDialog.behavior]);



  return (

    <>

      <ThemeToggle />

      <Fab

        color="primary"

        sx={{
          position: 'fixed',
          left: 24,
          bottom: 24,
        }}

        onClick={
          addDialog.handleOpen
        }

      >

        <AddIcon/>

      </Fab>

      <Fab

        color="info"

        sx={{
          position: 'fixed',
          right: 24,
          bottom: 96,
        }}

        onClick={
            languageDialog.handleBuehavior
        }

      >
        {
          languageDialog.behavior

          ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 10H16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <path d="M8 13H13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>

          : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="12" cy="10" r="1.5" fill="currentColor"/>
            </svg>
        }
        

      </Fab>


      <SearchBar

        value={query}

        onChange={setQuery}

      />



      <SortSelect

        value={sortOrder}

        onChange={setSortOrder}

      />




      {

        sortedNotes.length === 0

          ?

          <EmptyState />


          :
          <Box sx={{ mt: 2 }}>
            <NoteList

              notes={sortedNotes}

              onDelete={handleDelete}

              onEdit={handleEdit}

              behavior={languageDialog.behavior}

            />
          </Box>
          

      }



        <AddNoteDialog

          open={addDialog.open}

          onClose={
            addDialog.handleClose
          }

          onSave={addNote}

          behavior={languageDialog.behavior}

        />






      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: "row"
        }}
      >



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

          onConfirm={
            handleDeleteConfirm
          }

          behavior={languageDialog.behavior}

        />


      </Box>

      <Snackbar
        sx={{
          position: 'fixed',
          bottom: 10,
          "& .MuiSnackbarContent-message": {
            width: "100%",
            textAlign: "center",
          },
        }}  
        open={openBar}
        autoHideDuration={3000}
        onClose={handleClose}
        
      >
        <Alert
          severity="success"
          sx={{
            width: "100%",
          }}
        >
          {
            languageDialog.behavior

            ? "خبری نیست؛ فقط «نبشت» باهات پسرخاله شد"

            : "دفترچه یادداشت به حالت «مؤدب» در آمد"
          }
        </Alert>
      </Snackbar>


    </>

  );

}