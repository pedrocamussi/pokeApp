import { persistStore, persistReducer } from 'redux-persist';
import { Store, Reducer } from 'redux';

import { seamlessImmutableReconciler } from 'redux-persist-seamless-immutable';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { PersistConfig } from 'redux-persist/es/types';

const rootPersist: PersistConfig<any> = {
	key: 'root',
	storage: AsyncStorage,
	stateReconciler: seamlessImmutableReconciler,
	whitelist: ['pokemons'],
	timeout: undefined,
};

export const getPersistedReducer = (rootReducer: Reducer<any>) => {
	return persistReducer<any>(rootPersist, rootReducer);
};

export const getPersistor = (store: Store<any>) => persistStore(store);
