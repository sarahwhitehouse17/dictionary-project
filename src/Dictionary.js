import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

//Add photos to bottom of page
//1 - Get API - 563492ad6f91700001000001fdd29f0808df42bd90c33f42e128fa89
//2 - Set up API with the link

//3deb07c475cdt015b4f399a253e4o0b8
//https://api.shecodes.io/images/v1/search?query={query}&key={key}

//3 - Do a second axios call using the photos api.
//4 - Console.log to check working and pulls in correct keyword
//5 - Create a new use for the photos
//6 - Display the photos as a new component.

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function handlePhotosResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search() {
    //Api resource - https://api.shecodes.io/dictionary
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=3deb07c475cdt015b4f399a253e4o0b8`;
    axios.get(apiUrl).then(handleResponse);

    let apiKey = "3deb07c475cdt015b4f399a253e4o0b8";
    let apiPhotosUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(apiPhotosUrl).then(handlePhotosResponse);
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
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit} className="text-center form">
            <input
              type="search"
              onChange={handleKeyword}
              defaultValue={props.defaultKeyword}
            ></input>
          </form>
          <div className="hint">
            Suggestions: sunrise, sunset, forest, ocean, water
          </div>
        </section>
        <section>
          <Results results={results} keyword={keyword} />
          <Photos photos={photos} />
        </section>
      </div>
    );
  } else {
    load();
  }
}
