import { createSelector } from 'reselect';
import { InitialStateType } from '../reducers/types';

const pokemons = state => state.pokemons;

export const getPokemons = createSelector(pokemons, state => state.pokemons);

export const getPokemonDetails = createSelector(
	pokemons,
	state => state.pokemonDetails,
);
// export const getPokemons = (state: initialStateType) => {
// 	return state.pokemons;
// };

export const getPokemonsLoading = createSelector(
	pokemons,
	state => state.loading,
);

export const getPokemonsError = (state: InitialStateType) => {
	return state.error;
};

export const getPokemonId = (pokemonId: number) =>
	createSelector(state, state => {
		const pokemons = state.pokemons;
		const pokemonFiltered = pokemons.filter(
			pokemon => pokemon.id === pokemonId,
		);
		if (pokemonFiltered?.length) return pokemonFiltered[0];
		return null;
	});

export const getPokemonsPageAndLimit = createSelector(pokemons, state => {
	return {
		page: state?.page,
		limit: state?.limit,
		canLoadMore: state?.canLoadMore,
	};
});
