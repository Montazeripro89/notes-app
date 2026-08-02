import {
  useState,
} from "react";


import AddIcon from '@mui/icons-material/Add';

import {
  Box,
  Fab,
} from "@mui/material";


import NoteList from "../NoteList";

import EmptyState from "../EmptyState";

import ViewNoteDialog from "../ViewNoteDialog";

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

    viewingNote,

    setViewingNote,

  ] = useState<Note | null>(null);


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





  const handleView = (

    note: Note

  ) => {

    setViewingNote(note);

  };

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


    if (!selectedDeleteId) {

      return;

    }



    deleteNote(

      selectedDeleteId

    );



    setSelectedDeleteId(null);



    deleteDialog.handleClose();


  };







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

              onView={handleView}

            />
          </Box>
          

      }







        <AddNoteDialog

          open={addDialog.open}

          onClose={
            addDialog.handleClose
          }

          onSave={addNote}

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

        />

        <ViewNoteDialog

          open={Boolean(viewingNote)}

          note={viewingNote}

          onClose={() =>

            setViewingNote(null)

          }

        />


      </Box>


    </>

  );

}