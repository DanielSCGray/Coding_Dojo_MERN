import logo from './logo.svg';
import './App.css';
import PokeDisplay from './components/PokeDisplay';
import PokeFetch from './components/PokeFetch';
import { useState } from 'react';

function App() {

  const [pokeList, setPokeList] = useState([]);

  const getList = (list) => {
    setPokeList(list);
    
}
  
  return (
    <div className="App">

      <PokeFetch getList={getList} />
      <PokeDisplay pokeList={pokeList}/>
      
    </div>
  );
}

export default App;
