import React from 'react';
import { useState } from 'react';
import Navigation from './Sidenav/sidenav';
import Movies from './Pages/movies';
import Liked from './Pages/liked';
import Watchlist from './Pages/watchlist';
import MoviePoster from './MoviePoster';

function App() {
  const [currentPage, setCurrentPage] = useState('Movies');
  const [likedMovies, setLikedMovies] = useState([]);
  const [wishlistMovies, setWishlistMovies] = useState([]);

  const handleLike = (movie) => {
    setLikedMovies((prev) => [...prev, movie]);
    /*Learned about array fromhttps://www.w3schools.com/js/js_arrays.asp#gsc.tab=0*/
  };

  const handleWishlist = (movie) => {
    setWishlistMovies((prev) => [...prev, movie]);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Movies':
        return (
          <div className="flex flex-wrap">
            <MoviePoster name="Movie 1" image="https://via.placeholder.com/200x300" onLike={handleLike} onWishlist={handleWishlist} />
            <MoviePoster name="Movie 2" image="https://via.placeholder.com/200x300" onLike={handleLike} onWishlist={handleWishlist} />
          </div>
        );
      case 'Liked':
        /*Learned about switching states from https://www.w3schools.com/js/js_switch.asp*/
        return <Liked movies={likedMovies} />;
      case 'Watchlist':
        return <Watchlist movies={wishlistMovies} />;
      default:
        return <Movies />;
    }
  };

  return (
    <div className="flex">
      <Navigation setCurrentPage={setCurrentPage} />
      <main className="w-3/4 p-4">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
