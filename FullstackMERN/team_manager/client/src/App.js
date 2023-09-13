import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Status from './views/Status';


function App() {
    return (
        <div className="App">
            <div>
              <div className="m-2 d-inline">
                <Link to={'/players/list'}>Manage Players</Link>
              </div>
              <div className="m-2 d-inline">
                <Link to={'/status/game/1'}>Manage Player Status</Link>
              </div>
            </div>

            <Routes>
                <Route path='/players/:loc' element={<Home />} />
                {/* <Route path='/players/:id' element={<DisplayPlayer />} /> */}
                <Route path='/status/game/:gamenum' element={<Status />} />
            </Routes>

        </div>
    );
}

export default App;