import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

//Have a default load page steps
// 1 - change search to handleSubmit. then from within hS, add Search()
//2 - Search function will then do the axios call
// 3 - Create let - loaded, set loaded (false)
// 4 - Create if statement for return
// 5 - For else clause, create load()
//6 - Within load(), create setLoaded()
// 7 - pass a keyword from App.js, and send it as the default variable for keyword.

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function search() {
    //Api resource - https://api.shecodes.io/dictionary
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=3deb07c475cdt015b4f399a253e4o0b8`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit} className="text-center form">
            <input type="search" onChange={handleKeyword}></input>
          </form>
          <div className="hint">
            Suggestions: sunrise, sunset, forrest, countryside
          </div>
        </section>
        <section>
          <Results results={results} keyword={keyword} />
        </section>
      </div>
    );
  } else {
    load();
  }
}
