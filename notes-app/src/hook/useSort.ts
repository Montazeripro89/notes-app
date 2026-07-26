import {
  useMemo,
} from "react";


import type {
  Note,
} from "../types/Note";


import {
  sortNotes,
  type SortOrder,
} from "../utils/sort";



export function useSort(
  notes: Note[],
  order: SortOrder,
) {


  const sortedNotes = useMemo(

    () =>

      sortNotes(
        notes,
        order
      ),

    [
      notes,
      order,
    ]

  );



  return {

    sortedNotes,

  };


}