import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

const CreateArea = ({ onAdd }) => {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isExpanded, setIsExpanded] = useState(false);

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

  const expand = () => {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
      {isExpanded && ( <input name="title" value={note.title} onChange={handleChange} placeholder="Title" /> )}
        <textarea name="content" value={note.content} onClick={expand} onChange={handleChange} placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
        <Zoom in={isExpanded}><Fab onClick={submitNote}> <AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
