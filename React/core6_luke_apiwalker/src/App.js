
import './App.css';
import {Route, Routes, Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {useState} from 'react';
import StarSearch from './components/StarSearch';
import DisplayInfo from './components/DisplayInfo';
import obi1 from './components/obi1.png'





function App() {

  const navigate = useNavigate();

  const [starData, setStarData] = useState({});
  const [errorMsg, setErrorMsg] = useState('');
  const [errorPic, setErrorPic] = useState('');

  const getSearch = (subject, id) => {
    axios.get(`https://swapi.dev/api/${subject}/${id}/`).then(response => {
    console.log(response);  
    setStarData(response.data);
    setErrorMsg('')
    setErrorPic('')
    console.log(starData)
      // //Navigate using /{subject}/{id}
      navigate(`/${subject}/${id}`);
    }).catch(err=>{
      console.log(err);
      setStarData({})
      setErrorMsg("These aren't the droids you're looking for");
      setErrorPic(obi1)
    });

  }
  



  return (
    <div className="App">
      <StarSearch getSearch={getSearch}/>

      <Routes>
        <Route path='/:subject/:id' element={<DisplayInfo starData={starData} />}></Route>
      </Routes>

      <p>{errorMsg}</p>
      <img src={errorPic} />
    </div>
  );
}

export default App;
