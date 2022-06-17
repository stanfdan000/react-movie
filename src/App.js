
import './App.css';
import FormMovie from './FormMovie';
import MovieItem from './MovieItem.js';
import MovieList from './MovieList.js';
import { useState, useEffect } from 'react';

function App() {
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
  return (
    <div className="App">
      <div className='MovieSection'>
        <FormMovie
          movieTitle={movieTitle}
          setMovieTitle={setMovieTitle}
          movieDirector={movieDirector}
          setMovieDirector={setMovieDirector}
          movieYear={movieYear}
          setMovieYear={setMovieYear}
          movieColor={movieColor}
          setMovieColor={setMovieColor}
          addMovie={addMovie}
        />
        {
          movieTitle && <MovieItem 
            title={movieTitle}
            director={movieDirector}
            year={movieYear}
            color={movieColor} />
        }
      </div>
      <p>looking for a movie?</p>
      <input value={currentFilter} onChange={(e) => setCurrentFilter(e.target.value)} />
      <MovieList
        allMovies={filteredMovies || allMovies }
        deleteMovie={deleteMovie} />
    </div>
  );
}
          

export default App;
