import React from "react";

function MovieSelector({ isLoaded, filmArray, isLoading }) {
  return (
    <div>
      {isLoaded && (
        <ul>
          {filmArray.map((element) => {
            return <p className="item">{element.name}</p>;
          })}
        </ul>
      )}
      {isLoading && (
        <p className="loading">loading data...</p>
      )}
    </div>
  );
}

export default MovieSelector;
