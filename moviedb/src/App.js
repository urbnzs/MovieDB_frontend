import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchResult from "./components/SearchResult";
import RandomMovie from "./components/RandomMovie";
import WatchList from "./components/WatchList";
import WatchedMovies from "./components/WatchedMovies";
import DetailedMovie from "./components/DetailedMovie";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <SearchBar />
          <Route
            exact
            path="/search-result/:searchString"
            component={SearchResult}
          />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/watchlist" component={WatchList} />
          <Route exact path="/random-movie" component={RandomMovie} />
          <Route exact path="/watched-list" component={WatchedMovies} />
          <Route exact path="/movie/:movieId" component={DetailedMovie} />
        </Router>
      </header>
    </div>
  );
}

export default App;
