import { Route, Routes } from 'react-router-dom';
import './App.css';
import EditAuthor from './views/EditAuthor';
import NewAuthor from './views/NewAuthor';
import { AuthorList } from './components/AuthorList';

function App() {
    return (
        <div className="App">
            <h1>Favorite Authors</h1>

            <Routes>
            <Route path='/' element={<AuthorList />} />
                <Route path='/authors' element={<AuthorList />} />
                <Route path='/authors/new' element={<NewAuthor />} />
                <Route path='/edit/:id' element={<EditAuthor />} />
            </Routes>

        </div>
    );
}

export default App;
