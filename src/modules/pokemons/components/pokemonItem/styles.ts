import styled from 'styled-components/native';
import { Image } from 'react-native';
import colors from '../../utils/colors';
// const width = Dimensions.get('screen').width;
// const height = Dimensions.get('screen').height;

export const Container = styled.TouchableOpacity`
	margin: 8px auto 8px auto;
	width: 104px;
	height: 112px;
	border-radius: 20px;
	justify-content: center;
	border: 2px solid #74cb48;
`;

export const PokedexNumber = styled.Text`
	position: absolute;
	font-size: 10px;
	color: #74cb48;
	font-weight: bold;
	top: 5px;
	right: 5px;
`;
export const PokemonImg = styled(Image)`
	width: 90px;
	height: 90px;
	margin: 0 auto;
`;
export const PokemonTitleContainer = styled.View`
	justify-content: center;
	background-color: #74cb48;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
`;
export const PokemonTitle = styled.Text`
	font-size: 14px;
	color: white;
	text-transform: capitalize;
	text-align: center;
	font-weight: bold;
`;
