import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialStateType, Pokemon } from './types';

const initialState: InitialStateType = {
	pokemons: [],
	loading: false,
	error: false,
	errorDesc: '',
	canLoadMore: true,
	page: 0,
	limit: 21,
	pokemonDetails: null,
	favorites: {},
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
		getPokemonSpecie: (
			state,
			{ payload }: PayloadAction<{ pokemonId: number }>,
		) => {
			state.loading = true;
		},
		getPokemonSpecieSuccess: (
			state,
			{ payload }: PayloadAction<{ specie: any }>,
		) => {
			const { specie } = payload;
			state.pokemonDetails = {
				...state.pokemonDetails,
				specie,
			};
			state.loading = false;
		},
		getPokemonSpecieFailed: state => {
			state.loading = false;
			state.error = true;
		},
		togglePokemonFavorite: (
			state,
			{ payload }: PayloadAction<{ pokemon: Pokemon }>,
		) => {
			const { pokemon } = payload;
			if (state.favorites && state.favorites[pokemon.id])
				delete state.favorites[pokemon.id];
			else
				state.favorites = {
					...state.favorites,
					[pokemon.id]: pokemon,
				};
		},
	},
});

export default pokemonsSlice.reducer;
export const PokemonActions = pokemonsSlice.actions;
