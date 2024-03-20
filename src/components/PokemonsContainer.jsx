import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import TypesBar from './TypesBar';
import { getPokemon } from '../api/pokemon-api';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const promises = [];
        const typesSet = new Set();
        for (let i = 1; i <= 150; i++) {
          const pokemonData = await getPokemon(i);
          promises.push(pokemonData);
          pokemonData.types.forEach(type => typesSet.add(type.type.name));
        }
        const pokemonDataList = await Promise.all(promises);
        setPokemonList(pokemonDataList);
        setFilteredPokemonList(pokemonDataList);
        setPokemonTypes(['All', ...typesSet]);
      } catch (error) {
        console.error('Error fetching Pokémon list:', error);
      }
    };

    fetchPokemonList();
  }, []);

  const handleFilter = (type) => {
    if (type === 'All') {
      setFilteredPokemonList(pokemonList);
    } else {
      const filteredPokemon = pokemonList.filter(pokemon =>
        pokemon.types.some(pokemonType => pokemonType.type.name === type)
      );
      setFilteredPokemonList(filteredPokemon);
    }
  };

  return (
    <div className="pokemon-container">
      <h1>Pokémon API</h1>
      <TypesBar types={pokemonTypes} onFilter={handleFilter} />
      <div className="pokemon-list">
        {filteredPokemonList.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default App;
