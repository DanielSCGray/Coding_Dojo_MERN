import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const DisplaySubjectname = () => {

    const [subjectname, setSubjectname] = useState({});
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect( () => { axios.get(`http://localhost:8000/api/subjectnames/${id}`)
    .then(res => setSubjectname(res.data))
    .catch(err => console.log(err))
});
    const deleteSubjectname = (targetID) => {
        axios.delete(`http://localhost:8000/api/subjectnames/${targetID}`)
        .then(res => {
            console.log(res)
            navigate('/subjectnames')})
        .catch(err => console.log(err))
}
    if (subjectname) {
        
        return (
            <div>
                <p>{subjectname.title}</p>
                <p>Price : {subjectname.price}</p>
                <p>Description : {subjectname.description}</p>
                <button className='btn btn-danger btn-sm m-2' onClick={ () => deleteSubjectname(subjectname._id)}>Delete</button>
            </div>
        )
    }
}

export default DisplaySubjectname