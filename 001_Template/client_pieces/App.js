import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import DisplaySubjectname from './components/DisplaySubjectname';
import EditSubjectname from './components/EditSubjectname';

function App() {
    return (
        <div className="App">
            <h1>Title</h1>

            <Routes>
                <Route path='/subjectnames' element={<Home />} />
                <Route path='/subjectnames/:id' element={<DisplaySubjectname />} />
                <Route path='/edit/:id' element={<EditSubjectname />} />
            </Routes>

        </div>
    );
}

export default App;