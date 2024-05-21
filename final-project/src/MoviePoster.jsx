import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';

function MoviePoster({ name, image, onLike, onWishlist }) {
  const [liked, setLiked] = useState(false);
  const [wishlist, setWishlist] = useState(false);

  const handleLikeClick = () => {
    (liked) ? setLiked(false) : setLiked(true);
    onLike({ name, image });
  };

  const handleWishlistChange = (event) => {
    (wishlist) ? setWishlist(false) : setWishlist(true);
    setWishlist(event.target.checked);
    onWishlist({ name, image });
  };

  return (
    <div className="w-48 m-5 border border-gray-300 rounded-lg">
      <img src={image} alt={name} className="w-full h-72" />
      <div className="p-3 text-center">
        <h3 className="text-lg mb-2">{name}</h3>
        <div className="flex justify-around items-center">
          {liked ? (
            <FavoriteIcon style={{ color: 'red', cursor: 'pointer' }} onClick={handleLikeClick} />
          ) : (
            <FavoriteBorderIcon style={{ cursor: 'pointer' }} onClick={handleLikeClick} />
          )}
          <Checkbox
            checked={wishlist}
            onChange={handleWishlistChange}
            color="primary"
          />
        </div>
      </div>
    </div>
  );
}

export default MoviePoster;
