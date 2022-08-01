import "./PokemonList.css";

const PokemonList = ({ name, url }) => {
  const imgIndex = url.split("/")[url.split("/").length - 2];
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imgIndex}.png`;

  return (
    <div className="card" key={name}>
      <h3>{name}</h3>
      <img src={imgUrl} alt="img" />
    </div>
  );
};

export default PokemonList;
