export interface PokemonsResponse {
	count: number;
	results: PokemonResponseItem[];
}
export interface PokemonResponseItem {
	name: string;
	url: string;
}
export interface PokemonResponseDetailItem {
	sprites: any;
	stats: any;
	weight: number;
	id: number;
	name: string;
}
