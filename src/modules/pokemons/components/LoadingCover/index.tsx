import React from 'react';
import Spinner from '../SpinnerSpaces';
import { Container } from './styles';

interface LoadingProps {
	isVisible: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isVisible }) => {
	return (
		isVisible && (
			<Container>
				<Spinner />
			</Container>
		)
	);
};

export default Loading;
