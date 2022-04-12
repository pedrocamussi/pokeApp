export interface PokemonsResponse {
	count: number;
	results: PokemonResponseItem[];
}
export interface PokemonResponseItem {
	name: string;
	url: string;
}
