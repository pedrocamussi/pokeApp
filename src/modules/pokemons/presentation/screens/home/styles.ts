import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
	background-color: #f7f7f7;
	flex: 1;
	border: 12px solid #ffffff;
`;

export const PokemonsList = styled(FlatList)`
	height: 50%;
`;
