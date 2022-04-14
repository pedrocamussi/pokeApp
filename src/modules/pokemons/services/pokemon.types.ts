export interface PokemonsResponse {
	count: number;
	results: PokemonResponseItem[];
}
export interface PokemonResponseItem {
	id: number;
	name: string;
	img: string;
}
export interface PokemonResponseDetailItem {
	sprites: any;
	stats: any;
	weight: number;
	id: number;
	name: string;
}
