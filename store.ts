import { createStore, combineReducers, applyMiddleware } from 'redux';
import { compose, configureStore, Reducer } from '@reduxjs/toolkit';
import PokemonsSlice from './src/modules/pokemons/presentation/reducers/pokemons.reducers';
import Reactotron from './reactotron.config';
import applyAppStateListener from 'redux-enhancer-react-native-appstate';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/modules/pokemons/presentation/sagas/index';
import { getPersistedReducer, getPersistor } from './persist';

type GlobalReducer = 'pokemons';

const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const rootReducer: Record<GlobalReducer, Reducer<any, any>> = {
	pokemons: PokemonsSlice,
};
export const store = createStore(
	getPersistedReducer(combineReducers(rootReducer)),
	compose(
		applyAppStateListener(),
		Reactotron.createEnhancer(),
		applyMiddleware(sagaMiddleware),
	),
);
export const persistor = getPersistor(store);

sagaMiddleware.run(rootSaga);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
