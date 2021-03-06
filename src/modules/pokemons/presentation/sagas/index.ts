import { takeLatest, all } from 'redux-saga/effects';
import { PokemonActions } from '../reducers/pokemons.reducers';
import { getPokemon } from './getPokemon';
import { getPokemons } from './getPokemons';
import { getPokemonSpecie } from './getPokemonSpecie';

export default function* root(): unknown {
	yield all([
		yield takeLatest(PokemonActions.getPokemon, getPokemon),
		yield takeLatest(PokemonActions.getPokemons, getPokemons),
		yield takeLatest(PokemonActions.getPokemonSpecie, getPokemonSpecie),
	]);
}
