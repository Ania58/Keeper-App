import React from "react";

const Note = ({ id, title, content, onDelete }) => {
    return (
      <div className="note">
        <h1>{title}</h1>
        <p>{content}</p>
        {onDelete && <button onClick={() => onDelete(id)}>DELETE</button>}
      </div>
    );
  };

export default Note;