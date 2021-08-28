import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getMoviesQuery, getMoviesByIdQuery } from '../queries/movies.query';

export const useGetMovies = onSuccess => {
  // Call React Query to get data, but initally show our cached results for a better user experience.
  const { isLoading, isSuccess, error, isError, data } = useQuery('movies', getMoviesQuery);

  const movies = data?.data;

  return { isLoading, isSuccess, error, isError, movies };
};

export const useGetMovieById = movieId => {
  const queryClient = useQueryClient();

  const { isLoading, isSuccess, isError, data } = useQuery(
    ['movie', movieId],
    () => getMoviesByIdQuery(movieId),
    {
      initialData: () => {
        return queryClient.getQueryData('movies')?.data?.find(movie => movie._id === movieId);
      },
      initialDataUpdatedAt: () => queryClient.getQueryState('movies')?.dataUpdatedAt,
    }
  );

  const movie = data?.data;

  return { isLoading, isSuccess, isError, movie };
};
