import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";

const CreateArea = ({ onAdd }) => {
  const [note, setNote] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const submitNote = (e) => {
    e.preventDefault();
    if (note.title.trim() || note.content.trim()) {
      onAdd(note);
      setNote({ title: "", content: "" });
    }
  };

  return (
    <div>
      <form className="create-note">
        <input name="title" value={note.title} onChange={handleChange} placeholder="Title" />
        <textarea name="content" value={note.content} onChange={handleChange} placeholder="Take a note..." rows="3" />
        <Fab onClick={submitNote}> <AddIcon /></Fab>
      </form>
    </div>
  );
};

export default CreateArea;
