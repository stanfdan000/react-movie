import React from 'react';

export default function FormMovie({
  movieTitle, setMovieTitle,
  movieDirector, setMovieDirector,
  movieYear, setMovieYear,
  movieColor, setMovieColor,
  addMovie }) {

  function handleSubmit(e){
    e.preventDefault();
    const movie = {
      id: Math.ceil(Math.random() * 10000),
      title: movieTitle,
      director: movieDirector,
      year: movieYear,
      color: movieColor,
    };

    addMovie(movie);
    setMovieTitle('');
    setMovieDirector('');
    setMovieYear('');
    setMovieColor('');
  }

  return <form onSubmit={handleSubmit}>
    <label>
        Movie Title:
      <input required value={movieTitle} onChange={e => setMovieTitle(e.target.value)}/>
    </label>
    <label>
        Movie Director:
      <input required value={movieDirector} onChange={e => setMovieDirector(e.target.value)}/>
    </label>
    <label>
        Movie Year:
      <input required value={movieYear} onChange={e => setMovieYear(e.target.value)}/>
    </label>
  </form>;
}
    


