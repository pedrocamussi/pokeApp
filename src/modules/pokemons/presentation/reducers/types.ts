export interface initialStateType {
	pokemons: Pokemon[];
	loading: boolean;
	error: boolean;
	errorDesc: string;
	page: number;
	canLoadMore: boolean;
	limit: number;
}
export interface Pokemon {
	id: number;
	name: string;
	type: PokemonType[];
}
export interface PokemonType {
	name: string;
	icon: string;
}
