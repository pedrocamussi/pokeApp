import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialStateType, Pokemon } from './types';

const initialState: InitialStateType = {
	pokemons: [],
	loading: false,
	error: false,
	errorDesc: '',
	canLoadMore: false,
	page: 0,
	limit: 20,
	pokemonDetails: null,
};

const pokemonsSlice = createSlice({
	name: 'pokemons',
	initialState,
	reducers: {
		getPokemon: (state, _: PayloadAction<{ pokemonId: number }>) => {
			state.loading = true;
			state.error = false;
		},
		getPokemonSuccess: (
			state,
			{ payload }: PayloadAction<{ pokemon: Pokemon }>,
		) => {
			state.loading = false;
			state.pokemonDetails = payload.pokemon;
		},
		getPokemonFailed: (
			state,
			{ payload }: PayloadAction<{ errorDesc: string }>,
		) => {
			const { errorDesc } = payload;
			state.loading = false;
			state.error = true;
			state.errorDesc = errorDesc;
		},
		getPokemons: (state, _: PayloadAction<{ reset: boolean }>) => {
			state.loading = true;
			state.error = false;
		},
		getPokemonsSuccess: (
			state,
			{ payload }: PayloadAction<{ pokemons: Pokemon[]; page: number }>,
		) => {
			state.loading = false;
			state.error = false;
			state.page = payload.page;
			state.pokemons = [...state.pokemons, ...payload.pokemons];
			if (state.pokemons.length < state.page * state.limit) {
				state.canLoadMore = false;
			} else {
				state.canLoadMore = true;
			}
		},
		getPokemonsFailed: (
			state,
			{ payload }: PayloadAction<{ errorDesc: string }>,
		) => {
			const { errorDesc } = payload;
			state.loading = false;
			state.error = true;
			state.errorDesc = errorDesc;
		},
		clearPokemon: state => {
			state.pokemonDetails = null;
		},
		clearPokemons: state => {
			state.pokemons = [];
		},
		getPokemonsStop: state => {
			state.loading = false;
			state.error = false;
		},
		setPokemonDetail: (
			state,
			{ payload }: PayloadAction<{ pokemon: Pokemon }>,
		) => {
			state.loading = false;
			state.pokemonDetails = payload.pokemon;
		},
	},
});

export default pokemonsSlice.reducer;
export const PokemonActions = pokemonsSlice.actions;
