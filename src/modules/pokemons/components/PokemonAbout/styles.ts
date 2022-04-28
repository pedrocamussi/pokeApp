import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native';

export const Container = styled.View`
	justify-content: center;
	background: white;
	width: 100%;
`;
export const AboutTitle = styled.Text`
	font-size: 14px;
	line-height: 16px;
	color: ${({ pokemonColor }) => (pokemonColor ? pokemonColor : `black`)};
	margin: 0 auto;
	text

`;
export const PhysicalItemContainer = styled.View`
	flex-direction: row;
`;
export const AboutText = styled.Text`
	color: black;
	font-size: 12px;
	justify-content: center;
	margin: 0 auto;
`;
