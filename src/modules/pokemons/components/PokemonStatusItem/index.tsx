import React from 'react';

interface PokemonStatusItem {
	name: string;
	id: number;
	url: string;
	types: any[];
	onPress?: () => void;
}

const PokemonStatusItem: React.FC<PokemonStatusItem> = ({
	name,
	url,
	id,
	types,
	onPress,
}) => {
	return (
		// <Container>
		// 	<Text />
		// 	<Text />
		// 	<View />
		// </Container>
	);
};

export default PokemonStatusItem;
