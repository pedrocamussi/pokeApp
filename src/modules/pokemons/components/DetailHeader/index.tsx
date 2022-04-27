import React from 'react';
import { Container } from './styles';

interface DetailHeaderProps {
	name: string;
	id: number;
	url: string;
	types: any[];
}

const DetailHeader: React.FC<DetailHeaderProps> = ({
	name,
	id,
	url,
	types,
}) => {
	return (
		<Container>
			{/* <ReturnContainer>
			</ReturnContainer> */}
		</Container>
	);
};

export default DetailHeader;
