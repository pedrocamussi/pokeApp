import Api from './api';
import { PokemonResponseItem } from './pokemon.types';

// export const getPokemonsService = async params => {
// 	const response = await Api getPokemons();
// 	console.tron.log('response', { response });
// };

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

	async getPokemonsService(): Promise<PokemonResponseItem[]> {
		const response = await this.api.getPokemons();
		const { results } = response.data;
		return results;
	}
}
