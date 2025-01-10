import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css"

export default function Meaning(props) {
  console.log(props.meaning);
  console.log(props.meaning.synonyms);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p className="definition">{props.meaning.definition}</p>
      < Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
