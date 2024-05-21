import React from 'react';
import MoviePoster from '../MoviePoster';

function Watchlist({ movies }) {
  return (
    <div>
      <h1>Watchlist</h1>
      <div className="flex flex-wrap">
        {movies.map((movie, index) => (
          <MoviePoster key={index} name={movie.name} image={movie.image} onLike={() => {}} onWishlist={() => {}} />
        ))}
      </div>
    </div>
  );
}

export default Watchlist;
