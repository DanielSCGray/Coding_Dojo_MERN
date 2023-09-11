import {Route, Routes} from 'react-router-dom';
import './App.css';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>

      <Routes>
        <Route path='/products' element={<ProductForm />} />
      </Routes>
    </div>
  );
}

export default App;
