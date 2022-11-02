import React from "react";
import useSound from "use-sound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import "./Phonetics.css";

export default function Phonetic(props) {
  let [play] = useSound(props.phonetic.audio);
  if (props.phonetic.audio === "") {
    return null;
  } else {
    if (props.phonetic.text) {
      return (
        <div className="Phonetics">
          <button onClick={play}>
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
