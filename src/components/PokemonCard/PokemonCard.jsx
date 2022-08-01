import { useEffect, useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import axios from "axios";

const PokemonCard = () => {
  const [pokemon, setPokemon] = useState("");
  const [pokemonName, setPokemonName] = useState("");

  useEffect(() => {
    async function getPokemonApi() {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154`
        );
        console.log(response);
        setPokemon(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    getPokemonApi();
  }, [pokemonName]);

  const handleChange = (e) => {
    setPokemonName(e.target.value);
  };

  return (
    <div className="page">
      <div>
        <div className="header">
          <label htmlFor="header">PoKéMoN</label>
        </div>
        <input type="text" id="header" onChange={handleChange} />
      </div>
      <div className="container-card">
        {!pokemonName
          ? pokemon.map((pokes) => {
              return <PokemonList {...pokes} />;
            })
          : pokemon.map((pokes) => {
              return (
                pokes.name.includes(pokemonName) && <PokemonList {...pokes} />
              );
            })}
      </div>
    </div>
  );
};

export default PokemonCard;
