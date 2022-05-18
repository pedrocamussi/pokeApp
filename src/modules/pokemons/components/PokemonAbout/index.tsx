import React from 'react';
import { PokemonColors } from '../../utils/colors';
import PokemonPhysicalItem from '../PokemonPhysicalItem';
import PokemonMoveItem from '../PokemonMoveItem';
import {
	AboutTitle,
	Container,
	PhysicalItemContainer,
	AboutText,
	MoveList,
	Border,
	MoveSubtitle,
} from './styles';
import { SubTitle } from '../PokemonPhysicalItem/styles';

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
	const renderMove = ({ item }) => {
		return <PokemonMoveItem move={item.ability.name} />;
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
				<Border />
				<PokemonPhysicalItem
					physicalIcon="ruler-vertical"
					text={height}
					subtext={'Height'}
				/>
				<Border />
				<MoveList
					data={moves}
					renderItem={renderMove}
					keyExtractor={item => item.ability.name}
				/>
			</PhysicalItemContainer>
			<AboutText>{subtitle}</AboutText>
			<AboutTitle pokemonColor={PokemonColors[types[0].type.name]}>
				{title}
			</AboutTitle>
		</Container>
	);
};

export default PokemonAbout;
