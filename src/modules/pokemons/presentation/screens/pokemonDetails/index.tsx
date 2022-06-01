import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import PokemonItem from '../../../components/PokemonItem';
import { Pokemon } from '../../reducers/types';
import { useDispatch, useSelector } from 'react-redux';
import { PokemonActions } from '../../reducers/pokemons.reducers';
import {
	getPokemonDetails,
	getPokemonsLoading,
} from '../../selectors/selector.pokemon';
import LoadingIndicator from '../../../components/LoadingCover';
import PokemonAbout from '../../../components/PokemonAbout';
import { PokemonColors } from '../../../utils/colors';
import HeaderDetails from '../../../components/HeaderDetails';

interface PokemonDetailProps {
	name: string;
	id: number;
	url: string;
	types: any[];
}

const PokemonDetails = ({ route, navigation }) => {
	const dispatch = useDispatch();
	const pokemon = useSelector(getPokemonDetails);
	const loadingPokemons = useSelector(getPokemonsLoading);

	useEffect(() => {
		dispatch(PokemonActions.getPokemonSpecie({ pokemonId: pokemon.id }));
		return () => dispatch(PokemonActions.clearPokemon());
	}, []);

	return (
		<Container>
			<HeaderDetails id={pokemon.id} name={pokemon.name} />
			{pokemon.specie && (
				<PokemonAbout
					weight={pokemon.weight}
					height={pokemon.height}
					title="About"
					subtitle={pokemon.specie?.[0].flavor_text}
					types={pokemon.types}
					moves={pokemon.abilities}
				/>
			)}

			<LoadingIndicator isVisible={loadingPokemons} />
		</Container>
	);
};

export default PokemonDetails;
