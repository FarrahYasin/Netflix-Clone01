import React, { useState } from 'react';
import ModalMovie from './ModalMovie';

export default function Movie({ movie }) {
  const [showModal, setShowModal] = useState(false);

  const handleAddToFavorite = () => {
    setShowModal(true);
  };

  return (
    <div key={movie.id}>
      <h2>{movie.title}</h2>
      <p>{movie.release_date}</p>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <button onClick={handleAddToFavorite}>Add to Favorite</button>
      {showModal && <ModalMovie movie={movie} closeModal={() => setShowModal(false)} />}
    </div>
  );
}
