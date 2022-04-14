import styled from 'styled-components/native';

type logoProps = {
	size: number;
};

export const Logo = styled.View<logoProps>`
	width: ${({ size }) => (size ? `${size}px` : '20%')};
	height: ${({ size }) => (size ? `${size}px` : '100%')};
	align-self: center;
	justify-content: center;
	align-items: center;
	background-color: transparent;
`;

export const LoadingContainer = styled.View`
	background-color: #fff;
	width: 60px;
	height: 60px;
	border-radius: 30px;
	justify-content: center;
	align-items: center;
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(({}) => ({
	color: 'red',
	size: 'large',
}))``;
