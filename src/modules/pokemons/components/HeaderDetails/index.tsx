import React from 'react';
import { formatPokemonId } from '../../utils/formatIdPokemon';
import { Container, BackButton, Icon, Title, PokemonNumber } from './styles';

interface DetailHeaderProps {
	name: string;
	id: number;
}

const HeaderDetails: React.FC<DetailHeaderProps> = ({ name, id }) => {
	const formattedId = formatPokemonId(id);
	return (
		<Container>
			<BackButton onPress={() => {}}>
				<Icon name="arrow-left" />
			</BackButton>
			<Title>{name}</Title>
			<PokemonNumber>{formattedId}</PokemonNumber>
		</Container>
	);
};

export default HeaderDetails;
