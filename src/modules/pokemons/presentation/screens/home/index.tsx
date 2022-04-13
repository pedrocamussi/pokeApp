import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Container, PokemonsList } from './styles';
import PokemonItem from '../../../components/pokemonItem';
import { useDispatch, useSelector } from 'react-redux';
import { PokemonActions } from '../../reducers/pokemons.reducers';
import { getPokemons } from '../../selectors/selector.pokemon';
import { Pokemon } from '../../reducers/types';

const App = () => {
	const dispatch = useDispatch();
	const pokemons: Pokemon[] = useSelector(getPokemons);

	useEffect(() => {
		dispatch(PokemonActions.getPokemons());
	}, []); //array de dependência, td q tiver dentro, forçará novamente o useEffect

	const renderPokemonItem = ({ item }: Pokemon) => {
		return <PokemonItem name={item.name} url={item.url} id={item?.id} />;
	};

	return (
		<Container>
			<PokemonsList
				data={pokemons}
				renderItem={renderPokemonItem}
				keyExtractor={(item: Pokemon) => item.name}
				column={3}
			/>
		</Container>
	);
};

export default App;
