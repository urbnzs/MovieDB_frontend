import React, { useContext, useState, useEffect } from "react";
import MovieList from "./MovieList";
import { LanguageContext } from "../context/LanguageContext";
import { RefreshContext } from "../context/RefreshContext";
import axios from "axios";
import "../style/MyCollection.css";

export default function Experiences(props) {
  const [language, setLanguage] = useContext(LanguageContext);
  const [movieList, setMovieList] = useState([]);
  const [movieType, setMovieType] = useState("liked");
  const [refresh, setRefresh] = useContext(RefreshContext);

  useEffect(() => {
    if (movieType === "liked") {
      const likedURL = `http://localhost:8080/all-liked-movies/${language}`;
      axios
        .get(likedURL, {
          withCredentials: true,
          headers: { Authorization: `Bearer ${document.cookie}` },
        })
        .then((res) => {
          setMovieList(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      const dislikedURL = `http://localhost:8080/all-disliked-movies/${language}`;
      axios
        .get(dislikedURL, {
          withCredentials: true,
          headers: { Authorization: `Bearer ${document.cookie}` },
        })
        .then((res) => {
          setMovieList(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [language, movieType, refresh]);

  return (
    <div>
      <div className="buttonsArea">
        <button
          className="like"
          disabled={movieType === "liked"}
          onClick={() => {
            setMovieType("liked");
          }}
        >
          Liked Movies
        </button>

        <button
          className="dislike"
          disabled={movieType === "disliked"}
          onClick={() => {
            setMovieType("disliked");
          }}
        >
          Disliked Movies
        </button>
      </div>

      <MovieList movies={movieList} />
    </div>
  );
}
