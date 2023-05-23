import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default function ModalMovie({ movie, closeModal }) {
  const [comment, setComment] = useState('');

  const handleAddToFavorite = () => {
    const favoriteMovie = {
      poster_path: movie.poster_path,
      title: movie.title,
      release_date : movie.release_date,
      overview : movie.overview,
      comment: comment
    };
  
    // fetch('http://localhost:3008/addMovie', {
      fetch('https://movies-library-1ryn.onrender.com/addMovie', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(favoriteMovie)
    })
      .then(response => {
        if (response.ok) {
          console.log('Added to favorites:', movie.title);
        } else {
          throw new Error('Failed to add to favorites');
        }
      })
      .catch(error => {
        console.error('Error adding to favorites:', error);
      });
  };
  

  const handleCommentChange = e => {
    setComment(e.target.value);
  };

  const handleSubmitComment = e => {
    e.preventDefault();
    console.log('Submitted comment:', comment);
  };

  return (
    <Modal show={true} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{movie.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
    
        <img className='img1' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <p>{movie.overview}</p>
        <form onSubmit={handleSubmitComment}>
          <div>
            <label>Comment:</label>
            <textarea value={comment} onChange={handleCommentChange} />
          </div>
          <Button variant="primary" type="submit">Submit Comment</Button>
          <Button variant="success" onClick={handleAddToFavorite}>Add to Favorite</Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
