
import './MovieList.css';
import React from 'react';
import Movie from './Movie';
// import './MovieList.css';

// import Row from 'react-bootstrap/Row';

export default function MovieList(props) {
  const { movies } = props;
 console.log('favorite',movies)
  return (
    <div className="name1">{
      movies.length && (
                  movies.map(item => (
                     <div key={item.id}>
                      
               <Movie movie={item} />
               
                </div> )    
                  )
      )}
    </div>
  );
}
