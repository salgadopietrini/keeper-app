import React, { useState, useEffect } from "react";

export default function Note(props) {
  const [edition, setEdition] = useState({
    titledEdit: false,
    contentEdit: false,
    colorEdit: props.color ? true : false,
  });
  const [text, setText] = useState({
    titleInput: props.title,
    title: props.title,
    contentInput: props.content,
    content: props.content,
  });
  const [color, setColor] = useState({
    window: props.color
      ? props.color
      : props.mode === "dark"
      ? "#2A2B2F"
      : "#FFFFFF",
    letters: props.color ? "black" : props.mode === "dark" ? "white" : "black",
  });

  useEffect(() => {
    if (edition.colorEdit) {
      return null;
    } else if (props.mode === "dark") {
      return setColor({
        window: "#2A2B2F",
        letters: "white",
      });
    } else if (props.mode === "light") {
      return setColor({
        window: "#FFFFFF",
        letters: "black",
      });
    }
  }, [props.mode, edition.colorEdit]);

  const handleDelete = () => {
    props.deleteNote(props.id);
  };

  const handleTitleEdit = () => {
    setEdition((prevValue) => ({
      ...prevValue,
      titledEdit: true,
    }));
  };

  const handleContentEdit = () => {
    setEdition((prevValue) => ({
      ...prevValue,
      contentEdit: true,
    }));
  };

  const handleTitle = (event) => {
    setText((prevValue) => ({
      ...prevValue,
      titleInput: event.target.value,
    }));
  };
  const handleContent = (event) => {
    setText((prevValue) => ({
      ...prevValue,
      contentInput: event.target.value,
    }));
  };

  const handleColor = (event) => {
    setColor({
      window: event.target.value,
      letters: "black",
    });

    props.updateInfo(props.id, text.title, text.content, event.target.value);
    setEdition((prevValue) => ({
      ...prevValue,
      colorEdit: true,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setText((prevValue) => {
      return {
        ...prevValue,
        title: text.titleInput,
        content: text.contentInput,
      };
    });
    props.updateInfo(
      props.id,
      text.titleInput,
      text.contentInput,
      color.window === "#2A2B2F" || color.window === "#FFFFFF"
        ? undefined
        : color.window
    );
    setEdition((prevValue) => ({
      ...prevValue,
      titledEdit: false,
      contentEdit: false,
    }));
  };
  return (
    <div
      className="note"
      style={{ backgroundColor: color.window, color: color.letters }}
    >
      <h1 onClick={handleTitleEdit}>
        {edition.titledEdit || text.title === "" ? (
          <input
            style={{ all: "unset" }}
            name="tit"
            value={text.titleInput}
            onChange={handleTitle}
            placeholder="new title here"
            autoComplete="off"
          />
        ) : (
          text.title
        )}
      </h1>
      <p onClick={handleContentEdit}>
        {edition.contentEdit || text.content === "" ? (
          <input
            style={{ all: "unset" }}
            name="cont"
            value={text.contentInput}
            onChange={handleContent}
            placeholder="new content here"
            autoComplete="off"
          />
        ) : (
          text.content
        )}
      </p>
      <button
        onClick={handleDelete}
        style={{
          backgroundColor: color.window,
          color: color.letters,
          filter: "brightness(65%)",
          fontWeight: "bold",
        }}
      >
        X
      </button>
      {edition.contentEdit || edition.titledEdit ? (
        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: color.window,
            color: color.letters,
            filter: "brightness(65%)",
            fontWeight: "bold",
          }}
        >
          ✓
        </button>
      ) : null}
      {edition.colorEdit === false ? (
        <>
          <input
            className="color-picker"
            type="color"
            onChange={handleColor}
            value={color}
            list="presets"
          />
          <datalist id="presets">
            <option value="#FF99C8">Carnation Pink</option>
            <option value="#FCF6BD">Blond</option>
            <option value="#D0F4DE">Aero Blue</option>
            <option value="#A9DEF9">Uranian Blue</option>
            <option value="#E4C1F9">Mauve</option>
          </datalist>
        </>
      ) : null}
    </div>
  );
}
