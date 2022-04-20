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

	useEffect(() => {
		return () => dispatch(PokemonActions.clearPokemon());
	}, []);

	const renderPokemon = () => {
		if (pokemon)
			return (
				<PokemonItem
					name={pokemon?.name}
					url={pokemon?.images[0]}
					id={pokemon?.id}
					types={pokemon?.types}
				/>
			);
		return <></>;
	};

	return <Container>{renderPokemon()}</Container>;
};

export default PokemonDetails;
