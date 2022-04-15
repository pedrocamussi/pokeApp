import React from 'react';
import { formatPokemonId } from '../../utils/formatIdPokemon';
import {
	Container,
	PokemonTitle,
	PokemonImg,
	PokemonTitleContainer,
	PokedexNumber,
} from './styles';

interface PokemonItemProps {
	name: string;
	id: number;
	url: string;
	onPress: () => void;
}

const PokemonItem: React.FC<PokemonItemProps> = ({
	name,
	url,
	id,
	onPress,
}) => {
	return (
		<Container onPress={onPress}>
			<PokedexNumber>{formatPokemonId(id)}</PokedexNumber>
			<PokemonImg source={{ uri: url }} />
			<PokemonTitleContainer>
				<PokemonTitle>{name}</PokemonTitle>
			</PokemonTitleContainer>
		</Container>
	);
};

export default PokemonItem;
