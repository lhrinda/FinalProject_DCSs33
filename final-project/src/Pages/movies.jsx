import React from 'react';
import MoviePoster from '../MoviePoster';

function Movies() {
  const handleLike = (movie) => {
    setLikedMovies((prev) => [...prev, movie]);
    /*Learned about array fromhttps://www.w3schools.com/js/js_arrays.asp#gsc.tab=0*/
  };

  const handleWishlist = (movie) => {
    setWishlistMovies((prev) => [...prev, movie]);
  };
  return(
    <div>
    <div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"><h1 className="text-center text-3xl font-bold mb-4 text-white">Movies</h1></div>
      <div className="flex flex-wrap">
        <MoviePoster name="Movie 1" image="https://via.placeholder.com/200x300" onLike={handleLike} onWishlist={handleWishlist} />
        <MoviePoster name="Movie 2" image="https://via.placeholder.com/200x300" onLike={handleLike} onWishlist={handleWishlist} />
    </div>
   </div>
  );
}

export default Movies;