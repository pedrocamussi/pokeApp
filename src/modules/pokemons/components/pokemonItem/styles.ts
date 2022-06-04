import styled from 'styled-components/native';
import { Image } from 'react-native';
// import colors from '../../utils/colors';
// const width = Dimensions.get('screen').width;
// const height = Dimensions.get('screen').height;

export const Container = styled.TouchableOpacity`
	display: flex;
	margin: 8px auto 8px auto;
	width: 104px;
	height: 112px;
	border-radius: 20px;
	justify-content: center;
	border-width: 2px;
	border-color: ${({ pokemonColor }) =>
		pokemonColor ? pokemonColor : `black`};
`;
export const PokedexNumber = styled.Text`
	position: absolute;
	font-size: 10px;
	color: ${({ pokemonColor }) => (pokemonColor ? pokemonColor : `black`)};
	font-weight: bold;
	top: 5px;
	right: 5px;
`;
export const PokemonImg = styled(Image)`
	width: 90px;
	height: 90px;
`;
export const PokemonTitleContainer = styled.View`
	background-color: ${({ pokemonColor }) =>
		pokemonColor ? pokemonColor : `black`};
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
	justify-content: center;
	padding-bottom: 2px;
`;
export const PokemonTitle = styled.Text.attrs({
	underlineColorAndroid: 'black',
})`
	font-size: 10px;
	line-height: 16px;
	color: white;
	text-transform: capitalize;
	text-align: center;
`;

export const TogglePokemon = styled.TouchableOpacity`
	width: 20px;
	height: 20px;
	background-color: red;
`;

export const TogglePokemonText = styled.Text`
	font-size: 15px;
	color: white;
`;
