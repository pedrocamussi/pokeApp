import { put } from 'redux-saga/effects';
import { PokemonActions } from '../reducers/pokemons.reducers';

export function* getPokemon({ payload: { pokemonId } }): any {
	console.tron.log('getPokemon', pokemonId);
	yield put(PokemonActions.getPokemonFailed({ errorDesc: 'Deu erro otario' }));
}
