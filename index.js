import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import './reactotron.config';
import { PersistGate } from 'redux-persist/integration/react';

const Root = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	);
};

AppRegistry.registerComponent(appName, () => Root);
