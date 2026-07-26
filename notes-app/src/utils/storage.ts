import type {
  Note,
} from "../types/Note";



const NOTES_STORAGE_KEY = "notes";




export function getNotesFromStorage(): Note[] {


  const storedNotes = localStorage.getItem(
    NOTES_STORAGE_KEY
  );



  if (!storedNotes) {

    return [];

  }



  try {


    return JSON.parse(
      storedNotes
    ) as Note[];



  } catch {


    return [];

  }


}






export function saveNotesToStorage(
  notes: Note[]
): void {


  localStorage.setItem(

    NOTES_STORAGE_KEY,

    JSON.stringify(notes)

  );


}