import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { PopularMovieContextProvider } from "../src/context/PopularMovieContext";
import { LatestMovieContextProvider } from "../src/context/LatestMovieContext";
import { HomepageContextProvider } from "../src/context/HomepageContext";
import { WatchedMovieContextProvider } from "../src/context/WatchedMovieContext";
import { LikedMovieContextProvider } from "../src/context/LikedMovieContext";
import { DislikedMovieContextProvider } from "../src/context/DislikedMovieContext";
import { ExperienceContextProvider } from "../src/context/ExperienceContext";

ReactDOM.render(
  <React.StrictMode>
    <DislikedMovieContextProvider>
      <LikedMovieContextProvider>
        <ExperienceContextProvider>
          <WatchedMovieContextProvider>
            <PopularMovieContextProvider>
              <LatestMovieContextProvider>
                <HomepageContextProvider>
                  <App />
                </HomepageContextProvider>
              </LatestMovieContextProvider>
            </PopularMovieContextProvider>
          </WatchedMovieContextProvider>
        </ExperienceContextProvider>
      </LikedMovieContextProvider>
    </DislikedMovieContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
