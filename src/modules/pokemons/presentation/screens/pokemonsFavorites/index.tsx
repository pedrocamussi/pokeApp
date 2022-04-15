import React from 'react';
import { Container } from './styles';
import PokemonItem from '../../../components/PokemonItem';
import { Pokemon } from '../../reducers/types';

const PokemonFavorites = ({ route, navigation }) => {
	const pokemon = {
		name: 'Camussi',
		img: 'https://scontent.fmii3-1.fna.fbcdn.net/v/t39.30808-6/167169740_4203013006457418_8136698058271649572_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=2kEmwYEaE6kAX_9aOQD&_nc_ht=scontent.fmii3-1.fna&oh=00_AT9FRM-jiQLaXvwvc4r0IKwUIStqA44Is4o11QdHD5_mjA&oe=625CD460',
		id: 1,
	};
	return (
		<Container>
			<PokemonItem name={pokemon.name} url={pokemon.img} id={pokemon?.id} />
		</Container>
	);
};

export default PokemonFavorites;
