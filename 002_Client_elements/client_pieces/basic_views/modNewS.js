import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SubjectnameForm from '../components/SubjectnameForm';

import React from 'react'

const NewSubjectname = () => {

    const [errorMsg, setErrorMsg] = useState('');

    const navigate = useNavigate();
    //add in each value we're lifting  (newName, nextNewVal)
    const addNew = (newName) =>{
        
        axios.post('http://localhost:8000/api/subjectnames', {
            name: newName
            //for each added val key: newVal
        })
        .then(res=>{
            console.log(res);
            navigate('/subjectnames')
        })
        .catch(err=>{
            setErrorMsg(err.response.data.message)
        })
    }

    return (
        <div>
            <Link to={'/subjectnames'} >Home</Link>
            <h3>Add a new subjectname:</h3>
            
            <div>{errorMsg}</div>
            <SubjectnameForm action={addNew} subjectnameName={''}/>
        </div>
    )
}

export default NewSubjectname