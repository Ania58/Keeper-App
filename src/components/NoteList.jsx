import React from "react";
import Note from "./Note";

const NoteList = ({ notes, onDelete }) => {
  return (
    <>
      {notes.map((note, index) => (
        <Note key={index} id={index} title={note.title} content={note.content} onDelete={onDelete} />
      ))}
    </>
  );
};

export default NoteList;