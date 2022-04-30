import React from 'react';
import { PokemonColors } from '../../utils/colors';
import PokemonPhysicalItem from '../PokemonPhysicalItem';
import PokemonMoveItem from '../PokemonMoveItem';
import {
	AboutTitle,
	Container,
	PhysicalItemContainer,
	AboutText,
} from './styles';

interface PokemonAboutProps {
	title: string;
	weight: string;
	height: string;
	subtitle: string;
	moves: any[];
	types: any[];
}

const PokemonAbout: React.FC<PokemonAboutProps> = ({
	title,
	weight,
	height,
	subtitle,
	moves,
	types,
}) => {
	const renderMoves = ({}) => {
		moves.map(item => {
			return <PokemonMoveItem moves={item} />;
		});
	};
	return (
		<Container>
			<AboutTitle pokemonColor={PokemonColors[types[0].type.name]}>
				{title}
			</AboutTitle>
			<PhysicalItemContainer>
				<PokemonPhysicalItem
					physicalIcon="weight"
					text={weight}
					subtext={'Weight'}
				/>
				<PokemonPhysicalItem
					physicalIcon="ruler-vertical"
					text={height}
					subtext={'Height'}
				/>
				{renderMoves({ moves })}
			</PhysicalItemContainer>
			<AboutText>{subtitle}</AboutText>
		</Container>
	);
};

export default PokemonAbout;
