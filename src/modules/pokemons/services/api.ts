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
	async getPokemons(): Promise<AxiosResponse<PokemonsResponse>> {
		return await this.instance.get('/pokemon?limit=2000&offset=0');
	}

	async getPokemonId(
		params,
	): Promise<AxiosResponse<PokemonResponseDetailItem>> {
		return await this.instance.get(`/pokemon/${params.name}`);
	}
}
