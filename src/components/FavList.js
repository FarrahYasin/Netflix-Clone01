
import React from 'react';
import Movie from './Movie';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useEffect, useState } from 'react'
import axios from 'axios'
// import './MovieList.css';
// import './MovieList.css';


import './fav.css';


export default function FavList(props) {
  // const { handleUpdate } = props;
  const [movies, setMovies] = useState([]);
  const [updatedComment, setUpdatedComment] = useState('');

  const fetchData = async () => {
    try {
      const res =await axios.get(`https://movies-library-1ryn.onrender.com/addMovie`)
  
      console.log(res.data.data);
      setMovies(res.data.data)
  
    } catch(err) {
      console.log(err)
    }
  }
  
  useEffect(() => {
    fetchData();
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://movies-library-1ryn.onrender.com/addMovie/${id}`);
      setMovies(movies => movies.filter(item => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  
  const handleUpdate = async (id) => {
    try {
      const updatedMovie = {
        comments: updatedComment,
        title: movies.find((item) => item.id === id).title, 
      };
console.log(updatedMovie);
      await axios.put(`https://movies-library-1ryn.onrender.com/addMovie/${id}`,updatedMovie);
      setMovies((movies) =>
      movies.map((item) => (item.id === id ? { ...item, ...updatedMovie } : item))
      );
      setUpdatedComment('');
    } catch (err) {
      console.log(err);
    }
  };
  
    
// console.log(movies.poster_path)
  return (
    <div className="card-container">
      {movies.map((item) => (
        <Card key={item.id} className="card">

          {/* <Movie movie={item} /> */}

          <h2>{item.title}</h2>
      <p>{item.release_date}</p>
      <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />

      <p>{item.overview}</p>
      <p>{item.comment}</p>

          <Card.Body>
            {/* <Button variant="primary" onClick={() => handleUpdate(item.id)}>Update</Button> */}
            <div>
              <input
                type="text"
                value={updatedComment}
                onChange={(e) => setUpdatedComment(e.target.value)}
                placeholder="Enter the updated comment"
              />
              <Button variant="primary" onClick={() => handleUpdate(item.id )}>
                Update 
              </Button>
              <Button variant="danger" onClick={() => handleDelete(item.id)}> Delete</Button>


              </div>

          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

