import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <strong>Synonyms</strong>
        {props.synonyms.map(function (synonym, index) {
          return (
            <ul>
              <li className="synonyms" key={index}>
                <br></br> {synonym}
              </li>
            </ul>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
