import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f9170000100000154229bd683b54c89a120e9b06b602846";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=8`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
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
        <h1>Dictionary</h1>
        <div className="row">
          <div className="col-12 col-lg-7">
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
          <div className="col-12 col-lg-5">
            <section>
              <Photos photos={photos} />
            </section>
          </div>
        </div>
      </div>
    );
  } else {
    load();
    return `Loading...`;
  }
}
