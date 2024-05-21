import React from 'react';
import MoviePoster from '../MoviePoster';

function Liked({ movies }) {
  return (
    <div>
      <h1>Liked Movies</h1>
      <div className="flex flex-wrap">
        {movies.map((movie, index) => (
          <MoviePoster key={index} name={movie.name} image={movie.image} onLike={() => {}} onWishlist={() => {}} />
        ))}
      </div>
    </div>
  );
}

export default Liked;
