import React from "react";

const MovieList = (props) => {
  const FavoriteComponent = props.favoriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          key={index}
          className=" col image-container d-flex justify-content-start m-3"
        >
          <img src={movie.Poster} alt="movie" />
          <div
            onClick={() => props.handleFavoritesClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavoriteComponent />
            
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
