import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { PokemonActions } from '../../reducers/pokemons.reducers';
import { getPokemons } from '../../selectors/selector.pokemon';

const App = () => {
	const dispatch = useDispatch();
	const pokemons = useSelector(getPokemons);

	useEffect(() => {
		dispatch(PokemonActions.getPokemons());
	}, []);

	useEffect(() => {
		console.tron.log('pokemons', { pokemons });
	}, [pokemons]);

	return (
		<View>
			<Text>Alo</Text>
		</View>
	);
};

export default App;
