import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


export const SubjectnameList = () => {

    const [allSubjectnames, setAllSubjectnames] = useState([]);

    useEffect( () => {axios.get('http://localhost:8000/api/subjectnames')
        .then(response => setAllSubjectnames(response.data.subjectnames))
        .catch(err => console.log(err))
}, []);

    const deleteSubjectname = (targetID) => {
        axios.delete(`http://localhost:8000/api/subjectnames/${targetID}`)
        .then( removeFromDOM(targetID))
        .catch(err => console.log(err))
    }

    const removeFromDOM = deletedID => {
        const filteredList = allSubjectnames.filter((eachSubjectname, idx) => eachSubjectname._id !== deletedID)
        setAllSubjectnames(filteredList)

    }

    return (
        <div>
            <h1>All Subjectnames:</h1>
            {
                allSubjectnames.map((eachSubjectname, idx) =>{
                    return(
                        <div key={idx}>
                            <h4>
                                <Link to={`/subjectnames/${eachSubjectname._id}`} >{eachSubjectname.title}</Link>
                                
                                <button className='btn btn-danger btn-sm m-2' onClick={ () => deleteSubjectname(eachSubjectname._id)}>Delete</button>
                                <Link to={`/edit/${eachSubjectname._id}`} >Edit</Link>
                            </h4>
                            {/* <p>Price: {eachSubjectname.price}</p>
                            <p>Description: {eachSubjectname.description}</p> */}
                        </div>
                    )
                }
            )}

        </div>
    )
}
