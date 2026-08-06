import {
  Box,
} from "@mui/material";

import NoteCard from "../NoteCard";

import type {
  Note,
} from "../../../types/Note";

type NoteListProps = {

  notes: Note[];

  onDelete: (
    id: string
  ) => void;

  onEdit: (
    note: Note
  ) => void;

};

export default function NoteList({

  notes,

  onDelete,

  onEdit,

}: NoteListProps) {

  return (

    <Box>

      {

        notes.map((note) => (

          <NoteCard

            key={note.id}

            note={note}

            onDelete={onDelete}

            onEdit={onEdit}

          />

        ))

      }

    </Box>

  );

}