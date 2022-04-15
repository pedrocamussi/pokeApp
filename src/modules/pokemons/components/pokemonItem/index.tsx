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
}
const PokemonItem: React.FC<PokemonItemProps> = ({ id, name, url }) => {
	return (
		<Container>
			<PokedexNumber>#{id}</PokedexNumber>
			<PokemonImg source={{ uri: url }} />
			<PokemonTitleContainer>
				<PokemonTitle>{name}</PokemonTitle>
			</PokemonTitleContainer>
		</Container>
	);
};

export default PokemonItem;
