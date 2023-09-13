import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';


const PlayerForm = (props) => {

    const navigate= useNavigate();

    const [name, setName] = useState('');
    const [position, setPosition] = useState('')
    const [buttonDisabled, setbuttonDisabled] = useState(true)
    const [errorStatus, seterrorStatus] = useState('*Name must be 2+ characters')

    const validStatus = () => {
        if (name.length>1) {
            setbuttonDisabled(false);
            seterrorStatus('')
        }else{
            setbuttonDisabled(true);
            seterrorStatus('*Name must be 2+ characters')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:8000/api/players', {
            name,
            position
        })
            .then(res=>{
                console.log(res);
                navigate('/players/list')
            })
            .catch(err=>console.log(err))
    }


    return (
        <div className='m-3'>
            <form className="form-control" onSubmit={handleSubmit}>
                <label className="form-label">Name:</label>
                <input className="form-control" name={name} onChange={(e)=> {{setName(e.target.value)}; {validStatus()}}} />
                <p>{errorStatus}</p>
                <label className="form-label">Position:</label>
                <input className="form-control" name={position} onChange={(e)=> {setPosition(e.target.value)}} />
                <input className="form-control bg-success" type='submit' value='Add' disabled={buttonDisabled}/>
            </form>
        </div>
    )
}
export default PlayerForm;