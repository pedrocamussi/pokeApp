import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background: ${({ pokemonColor }) => (pokemonColor ? pokemonColor : `red`)}; ;
`;

export const PokemonsList = styled(FlatList)``;
