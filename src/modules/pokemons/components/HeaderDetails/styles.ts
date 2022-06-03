import styled from 'styled-components/native';
import { Image } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const HeaderContainer = styled.View`
	display: flex;
	align-items: center;
	width: 100%;
	height: 200px;
`;

export const Container = styled.View`
	width: 90%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	height: 40px;

	margin-top: 20px;
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

export const ImgContainer = styled.View`
	display: flex;
	align-items: center;
`;

export const PokemonImg = styled(Image)`
	width: 250px;
	height: 300px;
	position: absolute;
	top: -27px;
	z-index: 1;
`;

export const IconContainer = styled.View`
	display: flex;
	position: absolute;
	opacity: 0.1;
`;

export const BackgroundIcon = styled(MaterialCommunityIcons)`
	color: white;
	font-size: 300px;
	left: 60px;
	bottom: 25px;
`;
