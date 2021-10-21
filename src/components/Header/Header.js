import React from "react";
import { Switch } from "@mui/material";

export default function Header(props) {
  return (
    <header
      style={
        props.mode === "dark"
          ? { backgroundColor: "#202124", filter: "brightness(65%)" }
          : null
      }
    >
      <h1 onClick={props.handleMode}>Keeper</h1>

      <Switch
        onChange={props.handleMode}
        inputProps={{ "aria-label": "controlled" }}
        defaultChecked
      />
    </header>
  );
}
