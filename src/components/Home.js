
import React, {useEffect, useState } from 'react'
import MovieList from './MovieList'
import axios from 'axios'


export default function Home() {
  const [movies, setMovies] = useState([]);

const fetchData = async () => {
  try {
    // const res =await axios.get(`http://localhost:3008/trending`)
    const res =await axios.get(`https://movies-library-1ryn.onrender.com/trending`)

    
    console.log(res.data);
    setMovies(res.data)

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



