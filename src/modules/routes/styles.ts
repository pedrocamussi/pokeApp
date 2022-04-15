import styled from 'styled-components';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const HeartIcon = styled(FontAwesome5).attrs(({ solid }) => ({
	name: 'heart',
	size: 25,
	color: solid ? 'red' : 'black',
	solid: solid,
}))``;

export const PokemonIcon = styled(MaterialCommunityIcons).attrs(
	({ solid }) => ({
		name: 'pokeball',
		size: 25,
		color: solid ? 'red' : 'black',
		solid: solid,
	}),
)``;
