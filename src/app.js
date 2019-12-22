import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
// import Pet from "./Pet";
import SearchParams from "./searchParams";
import Details from "./details";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1 id="something-important">Adopt me</h1>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};
render(React.createElement(App), document.getElementById("root"));
