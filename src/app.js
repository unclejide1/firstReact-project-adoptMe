import React from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./searchParams";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt me</h1>
      <SearchParams />
    </div>
  );
};
render(React.createElement(App), document.getElementById("root"));
