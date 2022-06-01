import { put, select } from 'redux-saga/effects';
import pokemonsSlice, {
	PokemonActions,
} from '../../reducers/pokemons.reducers';
import PokemonService from '../../../services/services';
import { getPokemonsPageAndLimit } from '../../selectors/selector.pokemon';

export function* getPokemons({ payload: { reset } }): any {
	try {
		const { page, limit, canLoadMore } = yield select(getPokemonsPageAndLimit);

		let currentPage = page;

		if (reset) {
			// acessa a primeira vez da tela e quando realizado o pull to refresh
			yield put(PokemonActions.clearPokemons());
			currentPage = 0;
		}

		if (!canLoadMore && !reset) {
			yield put(PokemonActions.getPokemonsStop());
			return;
		}
		const pokemonService = PokemonService.getInstance();
		const response = yield pokemonService.getPokemonsService({
			limit,
			page: currentPage,
		});
		yield put(
			PokemonActions.getPokemonsSuccess({
				pokemons: response,
				page: currentPage + 1,
			}),
		);
	} catch (e) {
		yield put(PokemonActions.getPokemonsFailed({ errorDesc: e.message }));
	}
}
