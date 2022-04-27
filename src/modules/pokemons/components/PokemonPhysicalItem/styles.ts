import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native';

export const Container = styled.View`
	justify-content: center;
`;

export const IconTextContainer = styled.View`
	justify-content: center;
	flex-direction: column;
`;

export const IconContainer = styled.View``;

export const Title = styled.Text`
	font-size: 10px;
	color: black;
`;
export const SubTitle = styled.Text`
	font-size: 8px;
	color: black;
`;
export const Icon = styled(FontAwesome5Icon).attrs(nameTest => ({
	nameTest: nameTest,
	size: 16,
	color: 'black',
}))``;
