import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RouteStack from './src/modules/routes/routes';
const App = () => {
	return (
		<NavigationContainer>
			<RouteStack />
		</NavigationContainer>
	);
};

export default App;
