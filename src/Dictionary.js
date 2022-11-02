import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getWord(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="row">
          <div className="col-7">
            <section>
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  onChange={getWord}
                  defaultValue={props.defaultWord}
                />
              </form>
            </section>
            <Results results={results} />
          </div>
          <div className="col-5 imageSection">Image div</div>
        </div>
      </div>
    );
  } else {
    load();
    return `Loading...`;
  }
}
