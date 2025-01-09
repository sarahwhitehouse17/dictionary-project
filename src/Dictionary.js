import React, { useState } from "react";
import "./Dictionary.css";

//Create form
//Funcion for onSubmit
//Funcion for onChange
//console.log the value to check all linked up

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`searching for ${keyword}`);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={handleKeyword}></input>
    </form>
  );
}
