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



  const renderPage = () => {
    switch (currentPage) {
      case 'Movies':
        return (<Movies />);
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
