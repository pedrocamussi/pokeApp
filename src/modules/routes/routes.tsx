import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { HomeScreens, FavoritesScreens } from './tabs';
import { PokemonIcon, HeartIcon } from './styles';

const Tab = createBottomTabNavigator();

const MyStack = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let icon;
					if (route.name === 'Favorites') {
						icon = 'heart';
						return <HeartIcon solid={focused} />;
					} else {
						icon = 'pokeball';
						return <PokemonIcon solid={focused} />;
					}
				},
				tabBarActiveTintColor: 'red',
				tabBarInactiveTintColor: 'black',
			})}>
			<Tab.Screen
				name={'Home'}
				component={HomeScreens}
				options={{ headerShown: false }}
			/>

			<Tab.Screen
				name="Favorites"
				component={FavoritesScreens}
				options={{ headerShown: false }}
			/>
		</Tab.Navigator>
	);
};

export default MyStack;
