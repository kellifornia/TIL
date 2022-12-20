import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Movie from '../components/Movie';

function Detail(){
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const getMovieDetail = async () => {
    const data = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    console.log(data.data.movie)
    setMovie(data.data.movie);
    setLoading(false);
  }
  useEffect(() => {
    getMovieDetail();
  }, []);

  return (<div>
{loading ? <h1>Loading</h1> : <Movie key={movie.id} movie={movie}/>}
  </div>);
}


export default Detail;