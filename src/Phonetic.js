import React from "react";
import "./Phonetics.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetics">
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        title="audio"
      >
        Listen
      </a>{" "}
      {props.phonetic.text}
    </div>
  );
}
