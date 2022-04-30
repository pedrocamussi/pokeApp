import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const PokemonsList = styled(FlatList)``;

export const Button = styled.TouchableOpacity`
	width: 50px;
	height: 50px;
	background-color: red;
`;
