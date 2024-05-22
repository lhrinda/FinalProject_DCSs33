import React from 'react';
import MoviePoster from '../MoviePoster';

function Watchlist({ movies }) {
  return (
    <div>
      <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"><h1 className="text-center text-3xl font-bold mb-4 text-white">Watchlist</h1></div>
      <div className="flex flex-wrap">
        {movies.map((movie, index) => (
          <MoviePoster key={index} name={movie.name} image={movie.image} onLike={() => {}} onWishlist={() => {}} />
        ))}
      </div>
    </div>
  );
}

export default Watchlist;
