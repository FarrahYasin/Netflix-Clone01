import React from 'react';
import Movie from './Movie';

export default function MovieList(props) {
  const { movies } = props;

  return (
    <div>
      {movies.map(item => (
        <div key={item.id}>
          <Movie movie={item} />
        </div>
      ))}
    </div>
  );
}