import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreactAera(prop) {
  const [isEx, setIsEx] = useState(false);
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  function handelChange(event) {
    const { name, value } = event.target;
    setNewNote((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  }
  function submited(event) {
    prop.addnote(newNote);
    setNewNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  function ex() {
    setIsEx(true);
  }
  return (
    <div>
      <form className="create-note">
        {isEx && (
          <input
            onChange={handelChange}
            name="title"
            value={newNote.title}
            placeholder="Title"
          />
        )}
        <textarea
          onClick={ex}
          onChange={handelChange}
          name="content"
          value={newNote.content}
          placeholder="Take a note..."
          roes={isEx ? "3" : "1"}
        />
        <Zoom in={isEx}>
          <Fab onClick={submited}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreactAera;
