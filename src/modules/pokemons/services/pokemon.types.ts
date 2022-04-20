export interface PokemonsResponse {
	count: number;
	results: PokemonResponseItem[];
}
export interface PokemonResponseItem {
	id: number;
	name: string;
	img: string;
	color: string;
}
export interface PokemonResponseDetailItem {
	abilities: any;
	height: number;
	types: any;
	sprites: any;
	stats: any;
	weight: number;
	id: number;
	name: string;
}
