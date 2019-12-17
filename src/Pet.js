import React from "react";
//code will go here
export default function pet({ name, animal, breed }) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h1", {}, breed)
  ]);
}
