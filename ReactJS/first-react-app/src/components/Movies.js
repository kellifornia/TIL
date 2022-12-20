import React from 'react';
import { useState, useEffect } from 'react';
import Movie from './Movie';

function Movies() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const res = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`);
    const json = await res.json();

    setMovies(json.data.movies);
    setLoading(false);
  }

  useEffect(getMovies, []);

  return (
    <div>
      <h1>The Movies!👻</h1>
      {loading ?
        <strong>Loading...</strong> :
        movies.map((movie) => <Movie movie={movie} />)}
    </div>);
}


export default Movies;