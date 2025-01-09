import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

//Add in the She cODES api to handle submit.
//Axios. get to use the API and create the function
// With the function, console.log the response to check it's working

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
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
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={handleKeyword}></input>
    </form>
  );
}
