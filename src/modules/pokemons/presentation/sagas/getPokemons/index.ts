import { put } from 'redux-saga/effects';
import { PokemonActions } from '../../reducers/pokemons.reducers';
import PokemonService from '../../../services/services';

export function* getPokemons(): any {
	try {
		const pokemonService = PokemonService.getInstance();
		const response = yield pokemonService.getPokemonsService();
		console.tron.log('response', { response });
		yield put(
			PokemonActions.getPokemonsSuccess({ pokemons: [{ name: 'camussi' }] }),
		);
	} catch (e) {
		console.tron.log('Error', { error: e.message });
	}
}
