import axios, { Axios, AxiosResponse } from 'axios';
import { PokemonsResponse } from './pokemon.types';

export default class PokemonsApi {
	private BASEURL = 'https://pokeapi.co/api/v2';
	private instance: Axios;

	constructor() {
		this.instance = axios.create({
			baseURL: this.BASEURL,
		});
	}
	async getPokemons(): Promise<AxiosResponse<PokemonsResponse>> {
		return await this.instance.get('/pokemon?limit=2000&offset=0');
	}
}
