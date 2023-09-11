import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import DisplayProduct from './components/DisplayProduct';


function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>

      <Routes>
        <Route path='/products' element={<Home />} />
        <Route path='/products/:id' element={<DisplayProduct />} />
      </Routes>
      
    </div>
  );
}

export default App;
