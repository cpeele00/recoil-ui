import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetMovieById } from '../../common/hooks/movies.hooks';
import CountUp from 'react-countup';
import './movie.css';
import { useRecoilValue } from 'recoil';
import { favoriteMoviesState } from '../../common/atoms/movie.atom';

const Movie = () => {
  const { movieId }: any = useParams();
  const { movie } = useGetMovieById(movieId);
  const favoriteMovies = useRecoilValue(favoriteMoviesState);

  if (!movie) return null;

  return (
    <React.Fragment>
      <div
        className='movie'
        style={{
          backgroundImage: `url(${movie.imgUrl})`,
        }}>
        <div className='grid grid-cols-6 relative text-white p-8 pt-10' style={{ zIndex: 10001 }}>
          <div className='col-span-4'>
            <h3 className='text-5xl mb-8'>{movie.title}</h3>
            <p className='w-2/3 text-xl'>{movie.description}</p>
            <h4 className='mt-8 text-xl'>Director: {movie.director}</h4>
            <h4 className='mt-4 text-xl'>Genre: {movie.genre}</h4>
          </div>
          <div className='col-span-2 text-center mt-5'>
            <h4 className='text-3xl'>Rating</h4>
            <CountUp
              end={movie.rating}
              delay={0.5}
              duration={2.5}
              useEasing={true}
              className='text-9xl font-bold'
            />
          </div>
        </div>
      </div>
      <section className='p-8'>
        <h3 className='text-3xl'>Favorites</h3>
        <ul>
          {favoriteMovies?.map(favoriteMovie => {
            return (
              <li className='pb-3' key={favoriteMovie}>
                {favoriteMovie}
              </li>
            );
          })}
        </ul>
      </section>
    </React.Fragment>
  );
};

export default Movie;
