import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native';

export const Container = styled.View`
	justify-content: center;
`;
export const AboutTitle = styled.Text`
	font-size: 14px;
	line-height: 16px;
	color: ${({ pokemonColor }) => (pokemonColor ? pokemonColor : `black`)};
`;
export const PhysicalItemContainer = styled.View`
	flex-direction: row;
`;
export const AboutText = styled.Text`
	color: #212121;
	font-size: 10px;
`;

export const WeightIcon = styled(FontAwesome5Icon).attrs(() => ({
	name: 'weight',
	size: 16,
	color: 'white',
}))``;

export const HeightIcon = styled(FontAwesome5Icon).attrs(() => ({
	name: 'ruler-vertical',
	size: 16,
	color: 'white',
}))``;
