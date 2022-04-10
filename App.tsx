import React, { useEffect } from 'react';
import {Text, View} from 'react-native';
import { useDispatch } from 'react-redux';
import { PokemonActions } from './src/modules/pokemons/presentation/reducers/pokemons.reducers';

const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(PokemonActions.getPokemon({pokemonId:1}))
  },[]);

  return (
    <View>
      <Text>Alo</Text>
    </View>
  );
};

export default App;
