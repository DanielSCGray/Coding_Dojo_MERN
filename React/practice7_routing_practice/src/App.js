import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './componenets/Home';
import Content from './componenets/Content';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:val1' element={<Content />} />
          <Route path='/:val1/:val2' element={<Content />} />
          <Route path='/:val1/:val2/:val3' element={<Content />} />

        </Routes>


    </div>
  );
}

export default App;
