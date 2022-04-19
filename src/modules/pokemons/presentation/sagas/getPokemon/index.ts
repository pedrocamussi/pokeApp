import { delay, put } from 'redux-saga/effects';
import PokemonService from '../../../services/services';
import { PokemonActions } from '../../reducers/pokemons.reducers';

export function* getPokemon({ payload: { pokemonId } }): any {
	try {
		const pokemonService = PokemonService.getInstance();
		const response = yield pokemonService.getPokemonIdService({
			pokemonId,
		});
		yield delay(1000);
		yield put(
			PokemonActions.getPokemonSuccess({
				pokemon: response,
			}),
		);
	} catch (error) {
		yield put(
			PokemonActions.getPokemonFailed({ errorDesc: 'Deu erro otario' }),
		);
	}
}
