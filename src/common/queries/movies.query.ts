import axios from 'axios';

export const getMoviesQuery = async () => {
  const movies = await axios('http://localhost:5050/api/movies');

  return movies;
};

export const getMoviesByIdQuery = async (movieId: string) => {
  const movie = await axios(`http://localhost:5050/api/movies/${movieId}`);

  return movie;
};
