import { put, select, delay } from 'redux-saga/effects';
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
		yield delay(500);
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