import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native';

export const Container = styled.View`
	justify-content: center;
	background: white;
	width: 95%;
`;
export const AboutTitle = styled.Text`
	font-size: 16px;
	line-height: 16px;
	color: ${({ pokemonColor }) => (pokemonColor ? pokemonColor : `black`)};
	margin: 0 auto;
	font-weight: bold;
`;
export const PhysicalItemContainer = styled.View`
	margin: 0px auto;
	flex-direction: row;
	height: 120px;
	width: 300px;
`;
export const AboutText = styled.Text`
	color: black;
	font-size: 18px;
	margin: 16px 20px;
	text-align: justify;
	justify-content: center;
`;
export const MoveList = styled.FlatList`
	width: 100px;
	height: auto;
	margin: 0 auto;
	background: black;
`;
export const Border = styled.View`
	height: 90%;
	width: 2px;
	background: #e5e5e5;
`;
