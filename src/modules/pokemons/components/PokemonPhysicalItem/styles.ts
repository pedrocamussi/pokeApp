import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native';

export const Container = styled.View`
	display: flex;
	width: 100px;
	justify-content: center;
	align-items: center;
`;

export const IconTextContainer = styled.View`
	flex-direction: row;
`;

export const Title = styled.Text`
	font-size: 16px;
	color: black;
	margin: 8px;
`;
export const SubTitle = styled.Text`
	font-size: 12px;
	color: black;
`;
export const Icon = styled(FontAwesome5Icon).attrs(iconName => ({
	iconName: iconName,
	size: 32,
}))``;
