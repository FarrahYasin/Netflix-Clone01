
import React, { useState } from 'react';
import ModalMovie from './ModalMovie';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

export default function Movie({ movie }) {
  const [showModal, setShowModal] = useState(false);

  const handleAddToFavorite = () => {
    setShowModal(true);
  };

//   return (
//     <div key={movie.id}>
//       <h2>{movie.title}</h2>
//       <p>{movie.release_date}</p>
//       <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//       <p>{movie.overview}</p>
//       <button onClick={handleAddToFavorite}>Add to Favorite</button>
//       {showModal && <ModalMovie movie={movie} closeModal={() => setShowModal(false)} />}
//     </div>
//   );
// }

// return (
//   <Row className="card-row">
//   <Card style={{ width: '18rem' }} className="card-item">
    
//     <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//     <Card.Body>
//       <Card.Title>{movie.title}</Card.Title>
//       <Card.Text>{movie.release_date}</Card.Text>
//       <Card.Text>{movie.overview}</Card.Text>
//     </Card.Body>
//     {showModal && <ModalMovie movie={movie} closeModal={() => setShowModal(false)} />}
//     <Button variant="primary" onClick={handleAddToFavorite}>Add to Favorite</Button>

//   </Card>
//  </Row>
// );
return (
  <Row className="card-row">
  <Card style={{ width: '18rem' }} className="card-item">
  <Card.Title>{movie.title}</Card.Title>
  <Card.Text>{movie.release_date}</Card.Text>

    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    <Card.Body>
      {/* <Card.Title>{movie.title}</Card.Title> */}
      {/* <Card.Text>{movie.release_date}</Card.Text> */}
      <Card.Text>{movie.overview}</Card.Text>
    </Card.Body>
    {showModal && <ModalMovie movie={movie} closeModal={() => setShowModal(false)} />}
    <Button variant="primary" onClick={handleAddToFavorite}>Add to Favorite</Button>

  </Card>
 </Row>
);

}
