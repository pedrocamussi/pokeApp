import React from 'react';
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
			<PokedexNumber>#{id}</PokedexNumber>
			<PokemonImg source={{ uri: url }} />
			<PokemonTitleContainer>
				<PokemonTitle>{name}</PokemonTitle>
			</PokemonTitleContainer>
		</Container>
	);
};

export default PokemonItem;
