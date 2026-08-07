import MainLayout from "./components/layout/MainLayout";
import NotesContainer from "./components/notes/NotesContainer";

function App() {
  return (
    <MainLayout>
       {(behavior) => (

        <NotesContainer
          behavior={behavior}
        />

        )}
    </MainLayout>
  );
}

export default App;