import React from 'react';
import { Movie } from './Movie';

function Movies(props) {
  const { movies = [] } = props;

  return <div className="movies" >
    {
      movies.length
        ? movies.map(movie => {
          // Запись {...Object} внутри разметки JSX.Element равносильна перечислению
          // всех ключей этого объекта отдельными парами: name={value}!
          // Такая вот удобная функция spread-оператора внутри JSX.Element!
          return <Movie key={movie.imdbID} {...movie} />
        })
        : <h4>Nothing found...</h4>
    }
  </div>;
}

export { Movies };