import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';

import React from 'react'

const NewAuthor = () => {


    const navigate = useNavigate();

    const addNew = (newName) =>{
        
        axios.post('http://localhost:8000/api/authors', {name: newName})
        .then(res=>{
            console.log(res);
            navigate('/authors')
        })
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <Link to={'/authors'} >Home</Link>
            <AuthorForm action={addNew} authorName={''}/>
        </div>
    )
}

export default NewAuthor