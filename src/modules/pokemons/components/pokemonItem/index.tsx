import React from 'react';
import { Container, PokemonTitle, PokemonImg } from './styles';

interface PokemonItemProps {
	name: string;
	id: number;
	url: string;
}

const PokemonItem: React.FC<PokemonItemProps> = ({ name, url }) => {
	return (
		<Container>
			<PokemonTitle>{name}</PokemonTitle>
			<PokemonImg source={url} />
		</Container>
	);
};

export default PokemonItem;
