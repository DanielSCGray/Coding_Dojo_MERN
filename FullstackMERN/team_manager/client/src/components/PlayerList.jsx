import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


export const PlayerList = () => {

    const [allPlayers, setAllPlayers] = useState([]);

    useEffect( () => {axios.get('http://localhost:8000/api/players')
        .then(response => setAllPlayers(response.data.players))
        .catch(err => console.log(err))
}, []);

    const deletePlayer = (targetID) => {
        axios.delete(`http://localhost:8000/api/players/${targetID}`)
        .then( removeFromDOM(targetID))
        .catch(err => console.log(err))
    }

    const removeFromDOM = deletedID => {
        const filteredList = allPlayers.filter((eachPlayer, idx) => eachPlayer._id !== deletedID)
        setAllPlayers(filteredList)

    }

    return (
        <div>
            
            <table className='table'>
                <tbody>
                    <tr>
                <td>Player</td>
                <td>Position</td>
                <td>Action</td>
                    </tr>
                
                
            {
                allPlayers.map((eachPlayer, idx) =>{
                    return(
                        <tr key={idx}>
                            <td>{eachPlayer.name}</td>
                            <td>{eachPlayer.position}</td>
                            <td><button className='btn btn-danger btn-sm m-2' onClick={ () => deletePlayer(eachPlayer._id)}>Delete</button></td>
                        </tr>
                    )
                }
                )}
                </tbody>
            </table>

        </div>
    )
}