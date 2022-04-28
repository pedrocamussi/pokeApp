import React from 'react';

import { Container, Text } from './styles';

interface PokemonMoveItemProps {
	moves: any[];
}

const PokemonPhysicalItem: React.FC<PokemonMoveItemProps> = ({ moves }) => {
	return (
		<Container>
			<Text>{moves}</Text>
			<Text>{moves}</Text>
		</Container>
	);
};

export default PokemonPhysicalItem;
