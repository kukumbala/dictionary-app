import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import "./Phonetics.css";

export default function Phonetic(props) {
  let audio = new Audio(props.phonetic.audio);

  function playWord() {
    audio.play();
  }

  if (props.phonetic.audio === "") {
    return null;
  } else {
    if (props.phonetic.text) {
      return (
        <div className="Phonetics">
          <button onClick={playWord}>
            <FontAwesomeIcon icon={faCirclePlay} />
          </button>{" "}
          {props.phonetic.text}
        </div>
      );
    } else {
      return null;
    }
  }
}
