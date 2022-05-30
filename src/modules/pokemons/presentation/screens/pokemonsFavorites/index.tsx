import React from 'react';
import { Container } from './styles';
import PokemonItem from '../../../components/pokemonItem';
import { Pokemon } from '../../reducers/types';

const PokemonFavorites = ({ route, navigation }) => {
	const pokemon = {
		name: 'Camussi',
		img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
		id: 1,
		types: [{ type: { name: 'normal' } }],
	};
	return (
		<Container>
			<PokemonItem
				name={pokemon.name}
				url={pokemon.img}
				id={pokemon?.id}
				types={pokemon?.types}
			/>
		</Container>
	);
};

export default PokemonFavorites;
