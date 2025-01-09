import React from "react";

//create an if statement
//change to null if it doesn't work

export default function Result(props) {
  if (props.results) {
    return <h2>{props.results.word}</h2>;
  } else {
    return null;
  }
}
