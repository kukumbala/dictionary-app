import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms.length);
  if (props.synonyms.length === 0) {
    return null;
  } else
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
}
