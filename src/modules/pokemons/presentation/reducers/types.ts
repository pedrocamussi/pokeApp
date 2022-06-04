export interface InitialStateType {
	pokemons: Pokemon[];
	loading: boolean;
	error: boolean;
	errorDesc: string;
	page: number;
	canLoadMore: boolean;
	limit: number;
	pokemonDetails: Pokemon | null;
	favorites: null | any;
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
