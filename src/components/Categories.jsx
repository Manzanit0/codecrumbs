import React, { Component } from "react";

const categories = [
  "Systems Design",
  "Networking",
  "Devops",
  "Languages",
  "Tooling",
  "Refactoring",
  "Clean Code",
  "Trends"
];

export default class Categories extends Component {
  render() {
    return (
      <div className="container categories-container">
        {chunk(categories, 3).map(elements => (
          <div className="row">
            {elements.map(name => (
              <div className="three columns category-card">{name}</div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

function chunk(array, size) {
  const chunked_arr = [];
  for (let i = 0; i < array.length; i++) {
    const last = chunked_arr[chunked_arr.length - 1];
    if (!last || last.length === size) {
      chunked_arr.push([array[i]]);
    } else {
      last.push(array[i]);
    }
  }
  return chunked_arr;
}
