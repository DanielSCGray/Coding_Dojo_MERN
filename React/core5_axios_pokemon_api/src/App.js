
import './App.css';
import {useState} from 'react';
import PokeDisplay from './components/PokeDisplay';
import PokeFetch from './components/PokeFetch';


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
