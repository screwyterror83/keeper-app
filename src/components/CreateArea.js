import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

// import Note from "./Note";

function CreateArea(props) {

  const [isExpanded, setExpend] = useState(false)

  const [note, setNote] = useState({
    id: uuidv4(),
    title: "",
    content: ""
  })

  


  const handleChange = (e) => {
    // console.log(e.target.name)
    // console.log(e.target.value)

    const { name, value } = e.target;

    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value
        // when "name" inclosed in the square bracket, it will turn the "name" key, to the actual value of this "name" constant, and this will spread the value to the "note" key-value pair.
      };
    });
  }

  const submitNote = (e) => {
    props.onAdd(note);
    setNote({
      id: uuidv4(),
      title: "",
      content: "",
    });


    e.preventDefault();
  };

  const handleClick = () => {
    setExpend(true)
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={note.title}
          hidden={isExpanded? false: true}
        />
        <TextareaAutosize
          onClick={handleClick}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          value={note.content}
          rows={isExpanded? "3": "1"}
          rowsMin={3}
        />
        <Zoom in={isExpanded? true: false}>
          <Fab onClick={submitNote}>
            <NoteAddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
