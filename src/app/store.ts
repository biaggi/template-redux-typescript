import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import githubReducer from '../features/github/githubSlice';
import githubReposReducer from '../features/github/githubRepositoriesSlice';
import swapiReposReducer from '../features/swapi/swapiSlice';

export const store = configureStore({
  reducer: {
    github: githubReducer,
    repos: githubReposReducer,
    swapi: swapiReposReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
// store.subscribe(() => {
//   console.log(store.getState());
// });
