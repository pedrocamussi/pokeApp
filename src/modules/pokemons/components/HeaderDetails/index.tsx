import React from 'react';
import { formatPokemonId } from '../../utils/formatIdPokemon';
import {
	HeaderContainer,
	Container,
	BackButton,
	Icon,
	Title,
	PokemonNumber,
	ImgContainer,
	PokemonImg,
	IconContainer,
	BackgroundIcon,
} from './styles';

interface DetailHeaderProps {
	name: string;
	id: number;
	url: string;
	onPress?: () => void;
}

const HeaderDetails: React.FC<DetailHeaderProps> = ({
	name,
	id,
	url,
	onPress,
}) => {
	const formattedId = formatPokemonId(id);
	return (
		<HeaderContainer>
			<Container>
				<BackButton onPress={onPress}>
					<Icon name="arrow-left" />
				</BackButton>
				<Title>{name}</Title>
				<PokemonNumber>{formattedId}</PokemonNumber>
			</Container>
			<IconContainer>
				<BackgroundIcon name="pokeball" />
			</IconContainer>
			<ImgContainer>
				<PokemonImg source={{ uri: url }} />
			</ImgContainer>
		</HeaderContainer>
	);
};

export default HeaderDetails;
