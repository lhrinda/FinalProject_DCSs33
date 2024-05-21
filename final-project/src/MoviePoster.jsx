import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';

const PosterContainer = styled('div')({
  width: '200px',
  margin: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
});

const PosterImage = styled('img')({
  width: '100%',
  height: '300px',
  objectFit: 'cover',
});

const PosterContent = styled('div')({
  padding: '10px',
  textAlign: 'center',
});

const MovieName = styled('h3')({
  fontSize: '16px',
  margin: '10px 0',
});

const IconsContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
});

function MoviePoster({ name, image, onLike, onWishlist }) {
  const [liked, setLiked] = useState(false);
  const [wishlist, setWishlist] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
    onLike({ name, image });
  };

  const handleWishlistChange = (event) => {
    setWishlist(event.target.checked);
    onWishlist({ name, image });
  };

  return (
    <PosterContainer>
      <PosterImage src={image} alt={name} />
      <PosterContent>
        <MovieName>{name}</MovieName>
        <IconsContainer>
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
        </IconsContainer>
      </PosterContent>
    </PosterContainer>
  );
}

export default MoviePoster;
