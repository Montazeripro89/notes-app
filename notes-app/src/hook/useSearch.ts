import {
  useMemo,
} from "react";


import type {
  Note,
} from "../types/Note";



export function useSearch(
  notes: Note[],
  query: string,
) {


  const filteredNotes = useMemo(() => {


    if (!query.trim()) {

      return notes;

    }



    return notes.filter((note) => {


      const titleMatch =
        note.title
          .toLowerCase()
          .includes(
            query.toLowerCase()
          );



      const contentMatch =
        note.content
          .toLowerCase()
          .includes(
            query.toLowerCase()
          );



      return (
        titleMatch ||
        contentMatch
      );


    });


  }, [
    notes,
    query,
  ]);



  return {

    filteredNotes,

  };


}