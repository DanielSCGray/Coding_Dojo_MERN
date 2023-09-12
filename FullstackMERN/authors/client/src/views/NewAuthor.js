import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';

import React from 'react'

const NewAuthor = () => {

    const [errorMsg, setErrorMsg] = useState('');

    const navigate = useNavigate();

    const addNew = (newName) =>{
        
        axios.post('http://localhost:8000/api/authors', {name: newName})
        .then(res=>{
            console.log(res);
            navigate('/authors')
        })
        .catch(err=>{
            setErrorMsg(err.response.data.message)
        })
    }

    return (
        <div>
            <Link to={'/authors'} >Home</Link>
            <h3>Add a new author:</h3>
            
            <div>{errorMsg}</div>
            <AuthorForm action={addNew} authorName={''}/>
        </div>
    )
}

export default NewAuthor