import pokemonsReducers from '../presentation/reducers/pokemons.reducers';
import { formatImgUrl } from '../utils/formatImgUrl';
import { objectToAray } from '../utils/objectToArray';
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
		// for (pokemon of results) {
		// 	const {
		// 		color: { name: colorName },
		// 	} = await this.getPokemonSpeciesService({ name: pokemon.name });
		// 	const urlSplitted = pokemon.url.split('pokemon')[1];
		// 	const id = urlSplitted.replace(/[^a-zA-Z0-9]/g, '');
		// 	pokemons.push({
		// 		id,
		// 		name: pokemon.name,
		// 		img: formatImgUrl(id),
		// 		color: colorName,
		// 	});
		// }
		for (pokemon of results) {
			console.tron.log('pokemon', pokemon);
			const urlSplitted = pokemon.url.split('pokemon')[1];
			const id = urlSplitted.replace(/[^a-zA-Z0-9]/g, '');
			const pokemonResponse = await this.getPokemonIdService({
				pokemonId: id,
			});
			pokemons.push(pokemonResponse);
		}
		return pokemons;
	}

	async getPokemonIdService(params): Promise<PokemonResponseItem> {
		const { data } = await this.api.getPokemonId(params);
		const imgsToArray = objectToAray(data.sprites);
		const imgPokemon = imgsToArray.filter(image => image !== null);
		const imageDefault = formatImgUrl(params.pokemonId);
		const urlSplitted = data.species.url.split('species')[1];
		const id = urlSplitted.replace(/[^a-zA-Z0-9]/g, '');
		const pokemon = {
			abilities: data.abilities,
			name: data.name,
			height: data.height,
			id: data.id,
			images: [imageDefault, ...imgPokemon],
			stats: data.stats,
			types: data.types,
			weight: data.weight,
			specieId: id,
		};
		return pokemon;
	}

	async getPokemonSpecieService(params): Promise<PokemonResponseItem> {
		const response = await this.api.getPokemonSpecie(params);
		const specieArrayDescription = response.data.flavor_text_entries;
		const specieArrayDescriptionFiltered = specieArrayDescription.filter(
			text =>
				text.language.name === 'en' &&
				text.flavor_text &&
				text.version.name === 'firered',
		);
		return specieArrayDescriptionFiltered;
	}
}
