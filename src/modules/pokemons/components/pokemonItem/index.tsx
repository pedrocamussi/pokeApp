import React from 'react';
import { formatPokemonId } from '../../utils/formatIdPokemon';
import {
	Container,
	PokemonTitle,
	PokemonImg,
	PokemonTitleContainer,
	PokedexNumber,
	TogglePokemon,
	TogglePokemonText,
} from './styles';
import { PokemonColors } from '../../utils/colors';
import { Pokemon } from '../../presentation/reducers/types';

interface PokemonItemProps {
	name: string;
	id: number;
	url: string;
	types: any[];
	isFavorited: boolean;
	onPress?: () => void;
	toggleFavorite: () => void;
}

const PokemonItem: React.FC<PokemonItemProps> = ({
	name,
	url,
	id,
	types,
	isFavorited,
	onPress,
	toggleFavorite,
}) => {
	return (
		<>
			<Container
				onPress={onPress}
				pokemonColor={PokemonColors[types[0].type.name]}>
				<PokedexNumber pokemonColor={PokemonColors[types[0].type.name]}>
					{formatPokemonId(id)}
				</PokedexNumber>
				<PokemonImg source={{ uri: url }} />
				<PokemonTitleContainer pokemonColor={PokemonColors[types[0].type.name]}>
					<PokemonTitle>{name}</PokemonTitle>
				</PokemonTitleContainer>
			</Container>
			<TogglePokemon onPress={toggleFavorite}>
				<TogglePokemonText>{isFavorited ? 'N' : 'S'}</TogglePokemonText>
			</TogglePokemon>
		</>
	);
};

export default PokemonItem;
