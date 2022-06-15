import React, { useEffect } from 'react';
import { RefreshControl, Text, View } from 'react-native';
import { Container, PokemonsList } from './styles';
import PokemonItem from '../../../components/PokemonItem';
import LoadingIndicator from '../../../components/LoadingCover';

import { useDispatch, useSelector } from 'react-redux';
import { PokemonActions } from '../../reducers/pokemons.reducers';
import {
	getPokemons,
	getPokemonsFavorites,
	getPokemonsLoading,
	getPokemonsPageAndLimit,
} from '../../selectors/selector.pokemon';
import { Pokemon } from '../../reducers/types';
import { PokeAppScreen } from '../../../../routes/screens';

const App = ({ navigation }) => {
	const dispatch = useDispatch();
	const pokemons: Pokemon[] = useSelector(getPokemons);
	const loadingPokemons = useSelector(getPokemonsLoading);
	const pokemonsFavorites = useSelector(getPokemonsFavorites);

	const { canLoadMore } = useSelector(getPokemonsPageAndLimit);

	useEffect(() => {
		getPokemonsData(false);
	}, []); //array de dependência, td q tiver dentro, forçará novamente o useEffect

	const navigate = (screen, params) => {
		navigation.navigate(screen, params);
	};

	const getPokemonsData = (reset = false) => {
		dispatch(PokemonActions.getPokemons({ reset: reset }));
	};

	const handleOnPressPokemon = pokemon => {
		dispatch(PokemonActions.setPokemonDetail({ pokemon }));
		navigate(PokeAppScreen.PokemonDetails, { pokemon });
	};

	const toggleFavoritePokemon = (pokemon: Pokemon) =>
		dispatch(PokemonActions.togglePokemonFavorite({ pokemon }));
	const renderPokemonItem = ({ item, index }: Pokemon) => {
		return (
			<PokemonItem
				name={item.name}
				url={item.images[0]}
				id={item?.id}
				types={item?.types}
				onPress={() => handleOnPressPokemon(item)}
				isFavorited={pokemonsFavorites ? pokemonsFavorites[item.id] : false}
				toggleFavorite={() => toggleFavoritePokemon(item)}
			/>
		);
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
				numColumns={3}
				onEndReachedThreshold={0.3}
				refreshControl={
					<RefreshControl
						colors={['blue']}
						tintColor={'blue'}
						refreshing={false}
						onRefresh={() => getPokemonsData(true)}
					/>
				}
				ListFooterComponent={
					loadingPokemons ? (
						<View style={{ padding: 20 }}>
							<LoadingIndicator isVisible={loadingPokemons} />
						</View>
					) : null
				}
			/>
		);
	};

	return (
		<Container>
			{renderList()}
			{pokemons?.length === 0 && (
				<LoadingIndicator isVisible={loadingPokemons} />
			)}
		</Container>
	);
};

export default App;
