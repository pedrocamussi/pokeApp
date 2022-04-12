import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialStateType, Pokemon } from './types';

const initialState: initialStateType = {
	pokemons: [],
	loading: false,
	error: false,
	errorDesc: '',
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
			const { pokemon } = payload;
			state.loading = false;
			state.error = false;
			state.pokemons = [pokemon];
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
		getPokemons: state => {
			state.loading = true;
			state.error = false;
		},
		getPokemonsSuccess: (
			state,
			{ payload }: PayloadAction<{ pokemons: Pokemon[] }>,
		) => {
			const { pokemons } = payload;
			state.loading = false;
			state.error = false;
			state.pokemons = pokemons;
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
	},
});

export default pokemonsSlice.reducer;
export const PokemonActions = pokemonsSlice.actions;
