import React, { useEffect } from 'react';
import { Container } from './styles';
import PokemonItem from '../../../components/PokemonItem';
import { Pokemon } from '../../reducers/types';
import { useDispatch, useSelector } from 'react-redux';
import { PokemonActions } from '../../reducers/pokemons.reducers';
import {
	getPokemonDetails,
	getPokemonsLoading,
} from '../../selectors/selector.pokemon';
import LoadingIndicator from '../../../components/LoadingCover';
import PokemonAbout from '../../../components/PokemonAbout';

const PokemonDetails = ({ route, navigation }) => {
	const dispatch = useDispatch();
	const pokemon = useSelector(getPokemonDetails);
	const loadingPokemons = useSelector(getPokemonsLoading);

	useEffect(() => {
		dispatch(PokemonActions.getPokemonSpecie({ pokemonId: pokemon.id }));
		return () => dispatch(PokemonActions.clearPokemon());
	}, []);

	// const renderPokemon = () => {
	// 	if (pokemon)
	// 		return (
	// 			<PokemonItem
	// 				name={pokemon?.name}
	// 				url={pokemon?.images[0]}
	// 				id={pokemon?.id}
	// 				types={pokemon?.types}
	// 			/>
	// 		);
	// 	return <></>;
	// };

	return (
		<Container>
			{pokemon && (
				<PokemonAbout
					weight={pokemon.weight}
					height={pokemon.height}
					title="teste"
					subtitle="teste"
					types={pokemon.types}
				/>
			)}
			<LoadingIndicator isVisible={loadingPokemons} />
		</Container>
	);
};

export default PokemonDetails;
