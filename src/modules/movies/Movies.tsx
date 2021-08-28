import React from 'react';
import { withRouter } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { favoriteMoviesState } from '../../common/atoms/movie.atom';
import { Card } from '../../common/components/Card';
import { useGetMovies } from '../../common/hooks/movies.hooks';
import './movies.css';

const Movies = ({ history }) => {
  const { movies, isLoading } = useGetMovies();
  const [favoriteMovies, setFavoriteMovies]: any = useRecoilState(favoriteMoviesState);

  return (
    <>
      <section className='flex justify-center items-center filter drop-shadow bg-gradient-to-br from-gray-800 to-indigo-500 h-screen/50 text-white p-8'>
        <div className='text-center'>
          <h1 className='text-7xl'>Recoil / React-Query</h1>
          <h2 className='text-4xl'>Demo App</h2>
        </div>
      </section>
      <div className='w-full grid grid-cols-4'>
        <section className='flex flex-wrap col-span-3 p-8'>
          {!isLoading &&
            movies?.map(movie => {
              return (
                <Card
                  key={movie.title}
                  title={movie.title}
                  imgUrl={movie.imgUrl}
                  onFavoriteClick={() => {
                    setFavoriteMovies([...favoriteMovies, movie.title]);
                  }}
                  onDetailsClick={() => {
                    history.push(`/movies/${movie._id}`);
                  }}
                />
              );
            })}
        </section>
        <section className='bg-white p-5'>
          <h3 className='text-2xl text-gray-700 pb-5'>Favorites</h3>
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
      </div>
    </>
  );
};

export default withRouter(Movies);
