import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultWord="tree" />
      </div>
      <footer>
        This project was coded by Alex and is{" "}
        <a href="https://github.com/kukumbala/dictionary-app">
          open-sourced by GitHub
        </a>
      </footer>
    </div>
  );
}
