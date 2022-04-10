import {takeLatest, all} from 'redux-saga/effects'
import {PokemonActions} from '../reducers/pokemons.reducers'
import {getPokemon} from './pokemon'

export default function* root():unknown{
    yield all([
        yield takeLatest(PokemonActions.getPokemon, getPokemon)
    ])
}