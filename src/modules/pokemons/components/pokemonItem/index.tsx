import React from 'react';
import { formatPokemonId } from '../../utils/formatIdPokemon';
import {
	Container,
	PokemonTitle,
	PokemonImg,
	PokemonTitleContainer,
	PokedexNumber,
} from './styles';
import { PokemonColors } from '../../utils/colors';

interface PokemonItemProps {
	name: string;
	id: number;
	url: string;
	types: any[];
	onPress?: () => void;
}

const PokemonItem: React.FC<PokemonItemProps> = ({
	name,
	url,
	id,
	types,
	onPress,
}) => {
	return (
		<Container
			onPress={onPress}
			pokemonColor={PokemonColors[types[0].type.name]}>
			<PokedexNumber pokemonColor={PokemonColors[types[0].type.name]}>
				{formatPokemonId(id)}
			</PokedexNumber>
			<PokemonImg source={{ uri: url }} />
			<PokemonTitleContainer pokemonColor={PokemonColors[types[0].type.name]}>
				<PokemonTitle>{name}</PokemonTitle>
			</PokemonTitleContainer>
		</Container>
	);
};

export default PokemonItem;
