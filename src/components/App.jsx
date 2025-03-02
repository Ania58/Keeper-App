import React from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import NoteList from "./NoteList";
import useNotes from "../useNotes";
import Footer from "./Footer";

const App = () => {
    const { notes, addNote, deleteNote } = useNotes();
    return(
        <>
        <Header />
        <CreateArea onAdd={addNote} />
        <NoteList notes={notes} onDelete={deleteNote} />
        <Footer />
        </>
    )
}

export default App;