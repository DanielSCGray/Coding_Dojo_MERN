import axios from 'axios';
import {useEffect, useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';

const EditAuthor = (props) => {

    const [name, setName] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect( () => { axios.get(`http://localhost:8000/api/authors/${id}`)
    .then(res => {
        let oneAuthor = (res.data);
        setName(oneAuthor.name);
        console.log(name)
    })
    .catch(err => console.log(err))
}, []);

    const makeEdit = (newName) => {
        
        axios.put(`http://localhost:8000/api/authors/${id}`, {
            name: newName
        })
            .then(res=> {
                console.log(res);
                navigate('/authors')
            })
            .catch(err=>{
                setErrorMsg(err.response.data.message)
            })
    }


    return (
        <div className='m-3'>
            <Link to={'/authors'} >Home</Link>
            <h4>Edit this author:</h4>
            <div>{errorMsg}</div>
            <AuthorForm action={makeEdit} authorName={name} />
        </div>
    )
}
export default EditAuthor;