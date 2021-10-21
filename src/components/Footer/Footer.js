import React from "react";

export default function Footer(props) {
  const year = new Date().getFullYear();

  return (
    <footer
      style={props.mode === "dark" ? { backgroundColor: "#202124" } : null}
    >
      <p style={props.mode === "dark" ? null : { color: "#202124" }}>
        Delete functionality, edit functionality, dark mode and color picker
        implemented by Manuel Salgado Copyright © {year}
      </p>
    </footer>
  );
}
