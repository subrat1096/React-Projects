import { useEffect, useState } from "react";
import PokemonList from "./components/PokemonList";
import axios from "axios";
import Pagination from "./components/Pagination";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currPageUrl, setCurrPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPokemon(res.data.results.map((p) => p.name));
        setPrevPageUrl(res.data.previous);
      });

    return () => cancel();
  }, [currPageUrl]);

  function gotoNextPage() {
    setCurrPageUrl(nextPageUrl);
  }
  function gotoPrevPage() {
    setCurrPageUrl(prevPageUrl);
  }

  if (loading) return "Loading...";

  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination
        next={nextPageUrl ? gotoNextPage : null}
        prev={prevPageUrl ? gotoPrevPage : null}
      />
    </>
  );
}

export default App;
