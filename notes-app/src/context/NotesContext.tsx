import {
  createContext,
  useContext,
  type ReactNode,
} from "react";



import type {
  Note,
} from "../types/Note";



import {
  useLocalStorage,
} from "../hook/useLocalStorage";





type NotesContextType = {


  notes: Note[];



  addNote: (

    note: Note

  ) => void;





  deleteNote: (

    id: string

  ) => void;





  updateNote: (

    note: Note

  ) => void;


};







const NotesContext = createContext<

  NotesContextType | undefined

>(undefined);







type NotesProviderProps = {


  children: ReactNode;


};









export function NotesProvider({

  children,

}: NotesProviderProps) {





  const [

    notes,

    setNotes,

  ] = useLocalStorage<Note[]>(

    "notes",

    []

  );









  const addNote = (

    note: Note

  ) => {


    setNotes((previousNotes) => [


      ...previousNotes,


      note,


    ]);



  };









  const deleteNote = (

    id: string

  ) => {


    setNotes((previousNotes) =>


      previousNotes.filter(

        (note) =>

          note.id !== id

      )


    );


  };









  const updateNote = (

    updatedNote: Note

  ) => {


    setNotes((previousNotes) =>


      previousNotes.map(

        (note) =>


          note.id === updatedNote.id

            ? updatedNote

            : note


      )


    );


  };









  return (

    <NotesContext.Provider


      value={{


        notes,


        addNote,


        deleteNote,


        updateNote,


      }}


    >


      {children}


    </NotesContext.Provider>

  );

}









export function useNotes() {


  const context = useContext(

    NotesContext

  );





  if (!context) {


    throw new Error(

      "useNotes must be used inside NotesProvider"

    );


  }





  return context;


}