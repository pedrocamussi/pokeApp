import React from 'react';
import { Container } from './styles';
import PokemonItem from '../../../components/PokemonItem';
import { Pokemon } from '../../reducers/types';

const PokemonDetails = ({ route, navigation }) => {
	const {
		params: { pokemon },
	} = route;
	return (
		<Container>
			<PokemonItem name={pokemon.name} url={pokemon.img} id={pokemon?.id} />
		</Container>
	);
};

export default PokemonDetails;
