import { useEffect, useState } from 'react';

export default function FormMovie() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(null);
  const [movieYear, setMovieYear] = useState('');
  const [movieDirector, setMovieDirector] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieColor, setMovieColor] = useState('');
  const [currentFilter, setCurrentFilter] = useState('');

  useEffect(() => {
    const filteredMovies = allMovies.filter(movie => movie.title.includes(currentFilter));
    setFilteredMovies(filteredMovies);
  }, [currentFilter, allMovies]);

  function addMovie(newMovie) {
    const updateMovies = [...allMovies, newMovie];
    setAllMovies(updateMovies);
  }
  function deleteMovie(title) {
    const index = allMovies.findIndex(movie => movie.title === title);
    allMovies.splice(index, 1);
    setCurrentFilter('');
    setAllMovies([...allMovies]);
  }

  return {
    allMovies, setAllMovies,
    filteredMovies, setFilteredMovies,
    movieYear, setMovieYear,
    movieDirector, setMovieDirector,
    movieTitle, setMovieTitle,
    movieColor, setMovieColor,
    currentFilter, setCurrentFilter,
    addMovie, deleteMovie,
  };


}