import React, { useState } from "react";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function CreateArea(props) {
  const [noteText, setNoteText] = useState({
    title: "",
    content: "",
  });

  const [expandedNote, setExpandedNote] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNoteText((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleClick = (event) => {
    event.preventDefault();

    props.addNote(noteText);
    setNoteText({
      title: "",
      content: "",
    });
  };

  const { title, content } = noteText;

  return (
    <div>
      <form
        style={
          props.mode === "dark"
            ? { backgroundColor: "#202124", filter: "brightness(130%)" }
            : null
        }
      >
        {expandedNote && (
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            placeholder="Title"
            style={
              props.mode === "dark"
                ? { backgroundColor: "#202124", color: "white" }
                : null
            }
          />
        )}
        <textarea
          name="content"
          value={content}
          row={expandedNote ? "6" : "1"}
          placeholder="Take a note..."
          onChange={handleChange}
          onClick={() => setExpandedNote(true)}
          style={
            props.mode === "dark"
              ? { backgroundColor: "#202124", color: "white" }
              : null
          }
        />
        <Zoom in={expandedNote}>
          <Fab
            aria-label="add"
            color={props.mode === "dark" ? "white" : "primary"}
            className="addnote-btn"
            onClick={handleClick}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
