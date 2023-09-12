
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';


const AuthorForm = (props) => {

    const [name, setName] = useState('');
    const navigate = useNavigate();

    const authorName = props.authorName;
    if(!name && authorName){
        setName(authorName)
    }
    

//move this to new view and the other to post view
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name)
        props.action(name)
            // .then(navigate('/authors'))
            // .catch(err=>console.log(err))
    }


    return (
        <div className='m-3'>
            <form className="form-control" onSubmit={handleSubmit}>
                <label className="form-label">Name:</label>
                <input className="form-control" value={name} onChange={(e)=> {setName(e.target.value)}} />
                <div>
                    <button className='btn btn-warning btn-sm m-2' onClick={ () => navigate('/authors')}>Cancel</button>
                    <input className="form-control bg-primary" type='submit' value='Submit' />
                </div>
            </form>
        </div>
    )
}
export default AuthorForm;