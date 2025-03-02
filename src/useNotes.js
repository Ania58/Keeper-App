import { useState } from "react";
import notesData from "./notes"; 

const useNotes = () => {
  const [notes, setNotes] = useState(notesData);

  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note, index) => index !== id));
  };

  return { notes, addNote, deleteNote };
};

export default useNotes;