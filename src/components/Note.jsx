import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Note = ({ id, title, content, onDelete }) => {
    return (
      <div className="note">
        <h1>{title}</h1>
        <p>{content}</p>
        {onDelete && <button onClick={() => onDelete(id)}><DeleteIcon /></button>}
      </div>
    );
  };

export default Note;