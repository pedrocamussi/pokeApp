import React from 'react';

import { Container, IconTextContainer, Title, SubTitle, Icon } from './styles';

interface PokemonPhysicalItemProps {
	physicalIcon?: any;
	text: string;
	subtext: string;
}

const PokemonPhysicalItem: React.FC<PokemonPhysicalItemProps> = ({
	physicalIcon,
	text,
	subtext,
}) => {
	return (
		<Container>
			<IconTextContainer>
				<Icon name={physicalIcon} color={'black'} />
				<Title>{text}</Title>
			</IconTextContainer>
			<SubTitle>{subtext}</SubTitle>
		</Container>
	);
};

export default PokemonPhysicalItem;
