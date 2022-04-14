import { put } from 'redux-saga/effects';
import { PokemonActions } from '../../reducers/pokemons.reducers';

export function* getPokemon({ payload: { pokemonId } }): any {
	yield put(PokemonActions.getPokemonFailed({ errorDesc: 'Deu erro otario' }));
}
