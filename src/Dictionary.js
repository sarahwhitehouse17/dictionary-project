import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

//Send the props of the state to results.js

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();

    //Api resource - https://api.shecodes.io/dictionary
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=3deb07c475cdt015b4f399a253e4o0b8`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleKeyword}></input>
      </form>
      <Results results={results} keyword={keyword} />
    </div>
  );
}
