import styled from 'styled-components/native';
import { Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// const width = Dimensions.get('screen').width;
// const height = Dimensions.get('screen').height;

export const Container = styled.TouchableOpacity`
	width: 150px;
	height: 100px;
`;

export const PokemonTitle = styled.Text`
	color: #000;
`;
export const PokemonImg = styled(Image)`
	width: 50px;
	height: 40px;
`;
