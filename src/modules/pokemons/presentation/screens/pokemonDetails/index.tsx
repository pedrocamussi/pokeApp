import React, { useEffect } from 'react';
import { Container } from './styles';
import PokemonItem from '../../../components/PokemonItem';
import { Pokemon } from '../../reducers/types';
import { useDispatch, useSelector } from 'react-redux';
import { PokemonActions } from '../../reducers/pokemons.reducers';
import {
	getPokemonDetails,
	getPokemonsLoading,
} from '../../selectors/selector.pokemon';
import { LoadingIndicator } from '../../../components/SpinnerSpaces/styles';

const PokemonDetails = ({ route, navigation }) => {
	const dispatch = useDispatch();
	const pokemon = useSelector(getPokemonDetails);
	const loading = useSelector(getPokemonsLoading);

	useEffect(() => {
		const {
			params: { pokemon },
		} = route;
		dispatch(PokemonActions.getPokemon({ pokemonId: pokemon.id }));
	}, []);

	useEffect(() => {
		return () => dispatch(PokemonActions.clearPokemon());
	}, []);

	useEffect(() => {
		console.tron.log('loading', { loading });
	}, [loading]);

	const renderPokemon = () => {
		if (pokemon)
			return (
				<PokemonItem
					name={pokemon?.name}
					url={pokemon?.images[0]}
					id={pokemon?.id}
				/>
			);
		return <></>;
	};

	return (
		<Container>
			{renderPokemon()}
			{loading && <LoadingIndicator isVisible={loading} />}
		</Container>
	);
};

export default PokemonDetails;
