import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
	${StyleSheet.absoluteFill};
	flex: 1;
	justify-content: center;
	align-items: center;
	background: rgba(255, 255, 255, 0.8);
	z-index: 99;
`;
