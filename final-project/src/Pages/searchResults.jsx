import React from "react";
import Movies from "./movies";

const SearchResults = ({ movies, onLike, onWishlist }) => {
  return (
    <div>
      <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500">
        <h1 className="text-center text-3xl font-bold mb-4 text-white">
          Search Results
        </h1>
      </div>
      <Movies movies={movies} onLike={onLike} onWishlist={onWishlist} />
    </div>
  );
};

export default SearchResults;
