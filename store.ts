import {createStore, combineReducers} from 'redux';
import {compose, configureStore, Reducer} from '@reduxjs/toolkit';
import PokemonsSlice from './src/modules/pokemons/presentation/reducers/pokemons.reducers';
import Reactotron from './reactotron.config';
import applyAppStateListener from 'redux-enhancer-react-native-appstate';

type GlobalReducer = 'pokemons';

export const store2 = configureStore({
  reducer: {
    pokemons: PokemonsSlice,
  },
});

const rootReducer: Record<GlobalReducer, Reducer<any, any>> = {
  pokemons: PokemonsSlice,
};
export const store = createStore(
  combineReducers(rootReducer),
  compose(applyAppStateListener(), Reactotron.createEnhancer()),
);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
