import { delay, put } from 'redux-saga/effects';
import PokemonService from '../../../services/services';
import { PokemonActions } from '../../reducers/pokemons.reducers';

export function* getPokemonSpecie({ payload: { pokemonId } }): any {
	try {
		const pokemonService = PokemonService.getInstance();
		const response = yield pokemonService.getPokemonSpecieService({
			pokemonId,
		});
		yield delay(1000);
		yield put(
			PokemonActions.getPokemonSpecieSuccess({
				specie: response,
			}),
		);
	} catch (error) {
		yield put(PokemonActions.getPokemonSpecieFailed());
	}
}
