import React from 'react';
import { Container, PokemonTitle, PokemonImg } from './styles';

interface PokemonItemProps {
	name: string;
	id: number;
	url: string;
	onPress: () => void;
}

const PokemonItem: React.FC<PokemonItemProps> = ({ name, url, onPress }) => {
	return (
		<Container onPress={onPress}>
			<PokemonTitle>{name}</PokemonTitle>
			<PokemonImg source={{ uri: url }} />
		</Container>
	);
};

export default PokemonItem;
