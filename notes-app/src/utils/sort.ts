import type {
  Note,
} from "../types/Note";



export type SortOrder =

  "newest"

  |

  "oldest";





export function sortNotes(
  notes: Note[],
  order: SortOrder,
): Note[] {


  const sortedNotes = [
    ...notes,
  ];



  sortedNotes.sort(
    (a, b) => {


      if (order === "newest") {

        return (
          b.createdAt -
          a.createdAt
        );

      }



      return (
        a.createdAt -
        b.createdAt
      );


    }
  );



  return sortedNotes;


}