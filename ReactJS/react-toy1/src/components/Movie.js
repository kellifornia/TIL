import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


function Movie({ movie }) {
  const { id, title, medium_cover_image, summery, genres } = movie
  return (
    <div key={id}>
      <img src={medium_cover_image}></img>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link></h2>
      <p>{summery}</p>
      <ul>
        {genres.map(genre => <li key={genre}>{genre}</li>)}
      </ul>
    </div>);

}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
}

export default Movie;