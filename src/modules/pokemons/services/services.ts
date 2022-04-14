import { formatImgUrl } from '../utils/formatImgUrl';
import Api from './api';
import { PokemonResponseItem } from './pokemon.types';

export default class PokemonService {
	private api: Api;
	private static instance?: PokemonService;

	constructor() {
		PokemonService.instance = undefined;
		this.api = new Api();
	}

	static getInstance(): PokemonService {
		if (!PokemonService.instance) {
			PokemonService.instance = new PokemonService();
		}
		return PokemonService.instance;
	}

	async getPokemonsService(params): Promise<PokemonResponseItem[]> {
		const response = await this.api.getPokemons(params);
		const { results } = response.data;
		const pokemons = [];
		for (pokemon of results) {
			const urlSplitted = pokemon.url.split('pokemon')[1];
			const id = urlSplitted.replace(/[^a-zA-Z0-9]/g, '');
			pokemons.push({ id, name: pokemon.name, img: formatImgUrl(id) });
		}
		return pokemons;
	}

	async getPokemonIdService(params): Promise<PokemonResponseItem> {
		const response = await this.api.getPokemonId(params);
		return response;
	}
}
