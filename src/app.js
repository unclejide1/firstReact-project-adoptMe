import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", { id: "something" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "luna",
      animal: "dog",
      breed: "havanese"
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "cockatiel"
    }),
    React.createElement(Pet, { name: "Doink", animal: "cat", breed: "mixed" })
  ]);
};
render(React.createElement(App), document.getElementById("root"));
