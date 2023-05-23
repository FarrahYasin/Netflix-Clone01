
import React, { useState } from 'react';
import ModalMovie from './ModalMovie';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Movie({ movie }) {
  const [showModal, setShowModal] = useState(false);

  const handleAddToFavorite = () => {
    setShowModal(true);
  };

  return (
    <div key={movie.id}>
      <Card >
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        {/* <Card.Body> */}
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.release_date}</Card.Text>
          <Card.Text>{movie.overview}</Card.Text>
          <Button variant="primary" onClick={handleAddToFavorite}>Add to Favorite</Button>
        {/* </Card.Body> */}
      </Card>
      {showModal && <ModalMovie movie={movie} closeModal={() => setShowModal(false)} />}
    </div>
  );
}





