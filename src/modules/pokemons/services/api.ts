import axios, { Axios, AxiosResponse } from 'axios';
import { PokemonsResponse, PokemonResponseDetailItem } from './pokemon.types';

export default class PokemonsApi {
	private BASEURL = 'https://pokeapi.co/api/v2';
	private instance: Axios;

	constructor() {
		this.instance = axios.create({
			baseURL: this.BASEURL,
			timeout: 2500,
			headers: {
				'User-Agent': 'cheese',
				'Content-Encoding': 'gzip',
				'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
			},
		});
	}
	async getPokemons(params): Promise<AxiosResponse<PokemonsResponse>> {
		const offset = params.limit * params.page;
		return await this.instance.get(
			`/pokemon?limit=${params.limit}&offset=${offset}`,
		);
	}

	async getPokemonId(
		params,
	): Promise<AxiosResponse<PokemonResponseDetailItem>> {
		return await this.instance.get(`/pokemon/${params.pokemonId}`);
	}

	async getPokemonSpecie(params): Promise<AxiosResponse<any>> {
		return await this.instance.get(`/pokemon-species/${params.name}`);
	}
}
