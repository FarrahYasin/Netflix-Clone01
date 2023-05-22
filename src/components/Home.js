import React, {useEffect, useState } from 'react'
import MovieList from './MovieList'
import axios from 'axios'


export default function Home() {
  const [movies, setMovies] = useState([]);

const fetchData = async () => {
  try {
    const res =await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=f68a5f39bcaebb80be714773fbe6c484`)

    console.log(res.data.results);
    setMovies(res.data.results)

  } catch(err) {
    console.log(err)
  }
}

useEffect(() => {
  fetchData();
}, [])


  return (
    <div>
      <MovieList movies={movies} />
    </div>
  )
}
