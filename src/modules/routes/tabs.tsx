import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pokemons/presentation/screens/home/index';

import PokemonDetails from '../pokemons/presentation/screens/pokemonDetails/index';
import PokemonsFavorites from '../pokemons/presentation/screens/pokemonsFavorites/index';
const Stack = createNativeStackNavigator();

const HomeScreens = () => {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="Home"
				component={Home}
				options={{ title: 'Pokédex' }}
			/>
			<Stack.Screen
				name="PokemonDetails"
				component={PokemonDetails}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

const FavoritesScreens = () => {
	return (
		<Stack.Navigator initialRouteName="PokemonsFavorites">
			<Stack.Screen
				name="PokemonsFavorites"
				component={PokemonsFavorites}
				options={{ title: 'Pokemons favoritos' }}
			/>
		</Stack.Navigator>
	);
};

export { HomeScreens, FavoritesScreens };
