import './PokemonCard.css';

const PokemonCard = ({ pokemon }) => {
  const capitalizar = (word) => word.charAt(0).toUpperCase() + word.slice(1);

  let pokeID = pokemon.id.toString();

  if (pokeID.length == 2) {
    pokeID = '0' + pokemon.id;
  }
  else if (pokeID.length == 1) {
    pokeID = '00' + pokemon.id;
  }

  return (
    <div className="pokemon-card">
      <h2>#{pokeID} {capitalizar(pokemon.name)}</h2>
      <img
        className='pokemon-sprite'
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
      <div>
        <p>Altura: {pokemon.height} m</p>
        <p>Peso: {pokemon.weight} kg</p>
      <div>
        {pokemon.types.map((type, index) => (
            <p key={index} className={`type ${type.type.name}`}>{capitalizar(type.type.name)}</p>
          ))}
      </div>
    </div>
    </div>
  );
};

export default PokemonCard;
