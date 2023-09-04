
import './App.css';
import { useState } from 'react';
import ColorBox from './components/ColorBox';
import DisplayBox from './components/DisplayBox';

function App() {

  const [boxList, setBoxList] = useState([]);

  const addBox = (newBox) => {
    setBoxList([...boxList, newBox]);
  }

  return (
    <div className="App">
      <h1 className='m-3'>Box Maker</h1>
      

      <ColorBox onNewBox={addBox} />
      <div>

      <DisplayBox boxList={boxList}/>
      </div>
      
    </div>
  );
}

export default App;
