import React, { useState } from "react";

import Note from "../Note/Note";
import CreateArea from "../CreateArea/CreateArea";

export default function Container(props) {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  };

  const updateInfo = (id, newTitle, newContent, newColor) => {
    setNotes((prevNotes) => {
      prevNotes[id] = {
        ...prevNotes[id],
        title: newTitle,
        content: newContent,
        color: newColor,
      };
      console.log(prevNotes);
      return prevNotes;
    });
  };

  return (
    <div>
      <CreateArea addNote={addNote} mode={props.mode} />
      {notes.map((note, index) => {
        return (
          <Note
            key={Math.floor(Math.random() * 10000)}
            id={index}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
            updateInfo={updateInfo}
            color={note.color}
            mode={props.mode}
          />
        );
      })}
    </div>
  );
}
