import React from "react";

function searchField({ setTitle, fetchInfo }) {
  function getDataFromInputfield(event) {
    setTitle(event.target.value);
  }

  return (
    <div>
      <input type="text" onChange={getDataFromInputfield} placeholder="Title" className="input"></input>
      <button type="submit" onClick={fetchInfo} className="button">
        Search
      </button>
    </div>
  );
}
export default searchField;
