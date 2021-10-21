import React, { useState, useEffect } from "react";

import "./styles/style.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";

function App() {
  const [mode, setMode] = useState("light");

  const handleMode = () => {
    if (mode === "light") {
      return setMode("dark");
    }
    if (mode === "dark") {
      return setMode("light");
    }
  };

  useEffect(function () {
    if (mode === "dark") {
      return (document.body.style.backgroundColor = "#202124");
    } else {
      return (document.body.style.backgroundColor = "#FFFFFF");
    }
  });

  return (
    <div>
      <Header handleMode={handleMode} mode={mode} />
      <Container mode={mode} />
      <Footer mode={mode} />
    </div>
  );
}

export default App;
