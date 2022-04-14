import React, { useEffect } from 'react';
import { RefreshControl, Text, View } from 'react-native';
import { Container, PokemonsList } from './styles';
import PokemonItem from '../../../components/PokemonItem';
import LoadingIndicator from '../../../components/LoadingCover';

import { useDispatch, useSelector } from 'react-redux';
import { PokemonActions } from '../../reducers/pokemons.reducers';
import {
	getPokemons,
	getPokemonsLoading,
	getPokemonsPageAndLimit,
} from '../../selectors/selector.pokemon';
import { Pokemon } from '../../reducers/types';

const App = () => {
	const dispatch = useDispatch();
	const pokemons: Pokemon[] = useSelector(getPokemons);
	const loadingPokemons = useSelector(getPokemonsLoading);

	const { canLoadMore } = useSelector(getPokemonsPageAndLimit);

	useEffect(() => {
		getPokemonsData(true);
	}, []); //array de dependência, td q tiver dentro, forçará novamente o useEffect

	const getPokemonsData = (reset = false) => {
		dispatch(PokemonActions.getPokemons({ reset: reset }));
	};

	const renderPokemonItem = ({ item, index }: Pokemon) => {
		return <PokemonItem name={item.name} url={item.img} id={item?.id} />;
	};

	const onEndReachedPokemons = () => {
		if (canLoadMore) {
			getPokemonsData(false);
		}
	};

	const renderList = () => {
		if (!pokemons.length) return <></>;
		return (
			<PokemonsList
				data={pokemons}
				renderItem={renderPokemonItem}
				keyExtractor={(item: Pokemon) => item.name}
				onEndReached={onEndReachedPokemons}
				onEndReachedThreshold={0.3}
				refreshControl={
					<RefreshControl
						colors={['blue']}
						tintColor={'blue'}
						refreshing={false}
						onRefresh={() => getPokemonsData(true)}
					/>
				}
			/>
		);
	};

	return (
		<Container>
			{renderList()}
			<LoadingIndicator isVisible={loadingPokemons} />
		</Container>
	);
};

export default App;
