// import React from "react";
import PropTypes from "prop-types";
function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map((name) => (
        <div key={name}>{name}</div>
      ))}
    </div>
  );
}
PokemonList.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default PokemonList;
