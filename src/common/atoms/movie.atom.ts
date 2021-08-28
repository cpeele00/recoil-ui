import { atom } from 'recoil';

export const favoriteMoviesState = atom({
  key: 'favoriteMoviesStateKey',
  default: [],
});
