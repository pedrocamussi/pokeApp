import { put } from 'redux-saga/effects';
import { PokemonActions } from '../../reducers/pokemons.reducers';
import PokemonService from '../../../services/services';

export function* getPokemons(): any {
	try {
		const pokemonService = PokemonService.getInstance();
		const response = yield pokemonService.getPokemonsService();
		const pokemonDetailsResponse = yield response
			.slice(0, 15)
			.map(async pokemon => {
				return await pokemonService.getPokemonIdService({ name: pokemon.name });
			});
		console.tron.log('pokemonDetailsResponse', pokemonDetailsResponse);
		yield put(PokemonActions.getPokemonsSuccess({ pokemons: response }));
	} catch (e) {
		yield put(PokemonActions.getPokemonsFailed({ errorDesc: e.message }));
	}
}
