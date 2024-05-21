import React from 'react';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SearchIcon from "@mui/icons-material/Search";
import CreateIcon from "@mui/icons-material/AddBoxOutlined";

function Navigation({ setCurrentPage }) {
  return (
    <nav className="w-1/5 h-screen bg-gray-800 text-white">
        <button className="flex flex-row text-center items-center bg-none border-none my-[5px] mx-2.5 py-2.5 px-[15px] rounded-[15px] w-full hover:cursor-pointer hover:bg-slate-400" onClick={() => setCurrentPage('Movies')}>
          <div className="w-[30px] h-[30px]">
            <LocalMoviesIcon className="text-2xl mt-0.5 ml-0.5 transition-all duration-150 ease-linear delay-0 hover:text-3xl hover:mt-0 hover:ml-0" />
          </div>
            <span className="text-base font-normal ml-10">
              Movies
            </span>
        </button>

        <button className="flex flex-row text-center items-center bg-none border-none my-[5px] mx-2.5 py-2.5 px-[15px] rounded-[15px] w-full hover:cursor-pointer hover:bg-slate-400" onClick={() => setCurrentPage('Liked')}>
        <div className="w-[30px] h-[30px]">
            <FavoriteIcon className="text-2xl mt-0.5 ml-0.5 transition-all duration-150 ease-linear delay-0 hover:text-3xl hover:mt-0 hover:ml-0" />
          </div>
            <span className="text-base font-normal ml-10">
              Liked
            </span>
        </button>
        <button className="flex flex-row text-center items-center bg-none border-none my-[5px] mx-2.5 py-2.5 px-[15px] rounded-[15px] w-full hover:cursor-pointer hover:bg-slate-400" onClick={() => setCurrentPage('Watchlist')}>
        <div className="w-[30px] h-[30px]">
            <VisibilityIcon className="text-2xl mt-0.5 ml-0.5 transition-all duration-150 ease-linear delay-0 hover:text-3xl hover:mt-0 hover:ml-0" />
          </div>
            <span className="text-base font-normal ml-10">
              Watchlist
            </span>
        </button>

    
        <button className="flex flex-row items-center bg-none border-none my-[5px] mx-2.5 py-2.5 px-[15px] rounded-[15px] w-full hover:cursor-pointer hover:hover:bg-slate-400">
          <div className="w-[30px] h-[30px]">
            <SearchIcon className="text-2xl mt-0.5 ml-0.5 transition-all duration-150 ease-linear delay-0 hover:text-3xl hover:mt-0 hover:ml-0" />
          </div>
          <span className="text-base font-normal ml-10 transform rotate-30">
            Search
          </span>
        </button>
 
        <button className="flex flex-row items-center bg-none border-none my-[5px] mx-2.5 py-2.5 px-[15px] rounded-[15px] w-full hover:cursor-pointer hover:hover:bg-slate-400">
          <div className="w-[30px] h-[30px]">
            <CreateIcon className="text-2xl mt-0.5 ml-0.5 transition-all duration-150 ease-linear delay-0 hover:text-3xl hover:mt-0 hover:ml-0" />
          </div>
          <span className="text-base font-normal ml-10 transform rotate-30">
            Add Movie
          </span>
        </button>
    </nav>
  );
}

export default Navigation;
