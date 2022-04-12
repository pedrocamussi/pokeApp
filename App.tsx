import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { PokemonActions } from './src/modules/pokemons/presentation/reducers/pokemons.reducers';
import Home from './src/modules/pokemons/presentation/screens/home';

const App = () => {
	return (
		<View>
			<Home />
		</View>
	);
};

export default App;
