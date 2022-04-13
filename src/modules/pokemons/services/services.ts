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
		// const pokemons = results.slice(0, 15).map(async pokemon => {
		// 	const responsePokemonDetail = await this.getPokemonIdService({
		// 		name: pokemon.name,
		// 	});
		// 	return responsePokemonDetail;
		// });
		// console.tron.log('pokemons', pokemons);
		return results;
	}

	async getPokemonIdService(params): Promise<PokemonResponseItem> {
		const response = await this.api.getPokemonId(params);
		return response;
	}
}
