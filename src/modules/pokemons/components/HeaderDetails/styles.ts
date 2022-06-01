import styled from 'styled-components/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
	width: 80%;
	height: 32px;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity`
	justify-content: center;
`;

export const Icon = styled(FontAwesome5)`
	font-size: 28px;
	color: white;
`;

export const Title = styled.Text`
	color: white;
	justify-content: center;
	text-transform: capitalize;
	font-weight: bold;
	font-size: 22px;
`;

export const PokemonNumber = styled.Text`
	color: white;
	font-weight: bold;
`;
