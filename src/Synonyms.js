import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
            <div>
              <h4>Synonyms:</h4>
              <li key={index}>{synonym}</li>
            </div>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
