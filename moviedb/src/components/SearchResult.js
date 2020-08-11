import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router";
import MovieList from "./MovieList";
import { LanguageContext } from "../context/LanguageContext";

function SearchResult(props) {
  const [results, setResults] = useState([]);
  const { searchString } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const [maxPageNumber, setMaxPageNumber] = useState(0);
  const [language, setLanguage] = useContext(LanguageContext);

  useEffect(() => {
    setPageNumber(1);
  }, [searchString]);

  useEffect(() => {
    const url = `http://localhost:8080/search-result/${searchString}&page=${pageNumber}/${language}`;
    axios.get(url).then((res) => {
      setResults(res.data.results);
      setMaxPageNumber(res.data.total_pages);
    });
  }, [pageNumber, searchString, language]);

  const increasePageNumber = () => {
    let newPageNumber = pageNumber + 1;
    setPageNumber(newPageNumber);
  };

  const decreasePageNumber = () => {
    let newPageNumber = pageNumber - 1;
    setPageNumber(newPageNumber);
  };

  return (
    <div>
      <p>
        Pages: {pageNumber}/{maxPageNumber}
      </p>
      <button
        style={{ borderRadius: "0.3rem" }}
        onClick={decreasePageNumber}
        disabled={pageNumber === 1}
      >
        Previous page
      </button>
      <button
        style={{ borderRadius: "0.3rem" }}
        onClick={increasePageNumber}
        disabled={pageNumber >= maxPageNumber}
      >
        Next page
      </button>

      <MovieList movies={results} />
    </div>
  );
}

export default SearchResult;
