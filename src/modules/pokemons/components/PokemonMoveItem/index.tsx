import React from 'react';

import { Container, Text } from './styles';

interface PokemonMoveItemProps {
	move: string;
}

const PokemonMoveItem: React.FC<PokemonMoveItemProps> = ({ move }) => {
	return (
		<Container>
			<Text>{move}</Text>
		</Container>
	);
};

export default PokemonMoveItem;
