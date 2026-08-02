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

  behavior: boolean

};




export default function NoteList({
  notes,
  onDelete,
  onEdit,
  behavior
}: NoteListProps) {


  return (

    <>
    
      {
        notes.map((note) => (

          <NoteCard

            key={note.id}

            note={note}

            onDelete={onDelete}

            onEdit={onEdit}

            behavior={behavior}

          />

        ))
      }


    </>

  );

}