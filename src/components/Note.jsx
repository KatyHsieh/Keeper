import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(prop) {
  function handelDelete() {
    prop.delete(prop.id);
  }
  return (
    <div className="note a">
      <h1 className="b">{prop.title}</h1>
      <p>{prop.content}</p>
      <button onClick={handelDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
