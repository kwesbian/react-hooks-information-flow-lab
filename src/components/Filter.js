import React from "react";

function Filter({ onCategoryChange }) {
  return (
    <select onChange={onCategoryChange}>
      <option value="all">All</option>
      <option value="fruit">Fruit</option>
      <option value="vegetable">Vegetable</option>
    </select>
  );
}

export default Filter;