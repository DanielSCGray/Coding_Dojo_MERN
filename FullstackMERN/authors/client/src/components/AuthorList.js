import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


export const AuthorList = () => {

    const [allAuthors, setAllAuthors] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {axios.get('http://localhost:8000/api/authors')
        .then(response => setAllAuthors(response.data))
        .catch(err => console.log(err))
}, []);

    const deleteAuthor = (targetID) => {
        axios.delete(`http://localhost:8000/api/authors/${targetID}`)
        .then( removeFromDOM(targetID))
        .catch(err => console.log(err))
    }

    const removeFromDOM = deletedID => {
        const filteredList = allAuthors.filter((eachAuthor, idx) => eachAuthor._id !== deletedID)
        setAllAuthors(filteredList)

    }

    return (
        <div>
            <h1>All Authors:</h1>
            <Link to={'/authors/new'}>Add an author</Link>
            <table className='table'>
                <tbody>
                    <tr>
                <td>Author</td>
                <td>Edit</td>
                <td>Delete</td>
                    </tr>
                
                
            {
                allAuthors.map((eachAuthor, idx) =>{
                    return(
                        <tr key={idx}>
                            <td>{eachAuthor.name}</td>
                            <td><button className='btn btn-warning btn-sm m-2' onClick={ () => navigate(`/edit/${eachAuthor._id}`)}>Edit</button></td>
                            <td><button className='btn btn-danger btn-sm m-2' onClick={ () => deleteAuthor(eachAuthor._id)}>Delete</button></td>
                        </tr>
                    )
                }
                )}
                </tbody>
            </table>

        </div>
    )
}