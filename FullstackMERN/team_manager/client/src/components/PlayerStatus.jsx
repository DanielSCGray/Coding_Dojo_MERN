import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


export const PlayerStatus = (props) => {
    let gameID = props.gameID

    const [allPlayers, setAllPlayers] = useState([]);
    
    

    useEffect( () => {axios.get('http://localhost:8000/api/players')
        .then(response => setAllPlayers(response.data))
        .catch(err => console.log(err))
}, []);

    const updatePlayer = (idx, targetID, gameID, newStatus) => {
        axios.patch(`http://localhost:8000/api/players/${targetID}`, {
            [gameID] : newStatus
        })
        .then( updateDOM(idx, targetID, gameID, newStatus))
        .catch(err => console.log(err))
    }

    const updateDOM = (changeidx, id, game, stat) => {
        console.log(allPlayers)
        const preList = allPlayers.slice(0, changeidx);
        const postList = allPlayers.slice((changeidx+1));
        const updatedPlayer = allPlayers.filter(eachPlayer => eachPlayer._id == id)
        console.log(allPlayers)
        updatedPlayer[0][game] = stat;
        
        setAllPlayers([...preList, updatedPlayer[0], ...postList])
    }
    const removeFromDOM = deletedID => {
        const filteredList = allPlayers.filter((eachPlayer, idx) => eachPlayer._id !== deletedID)
        setAllPlayers(filteredList)

    }
    // console.log(allPlayers)
    // console.log(gameID)

    
    const buttonCheck1 = (player, idx) => {
        if (player[gameID] == 'playing') {
            return(
                <button className='btn btn-success btn-sm m-2' onClick={ () => updatePlayer(idx, player._id, gameID, 'playing')}>Playing</button>
            )
        } else{
            return (
                <button className='btn btn-light btn-sm m-2' onClick={ () => updatePlayer(idx, player._id, gameID, 'playing')}>Playing</button>
            )
        }
    }
    const buttonCheck2 = (player, idx) => {
        if (player[gameID] == 'not playing') {
            return(
                <button className='btn btn-danger btn-sm m-2' onClick={ () => updatePlayer(idx, player._id, gameID, 'not playing')}>Not Playing</button>
            )
        } else{
            return (
                <button className='btn btn-light btn-sm m-2' onClick={ () => updatePlayer(idx, player._id, gameID, 'not playing')}>Not Playing</button>
            )
        }
    }
    const buttonCheck3 = (player, idx) => {
        if (player[gameID] == 'undecided') {
            return(
                <button className='btn btn-warning btn-sm m-2' onClick={ () => updatePlayer(idx, player._id, gameID, 'undecided')}>Undecided</button>
            )
        } else{
            return (
                <button className='btn btn-light btn-sm m-2' onClick={ () => updatePlayer(idx, player._id, gameID, 'undecided')}>Undecided</button>
            )
        }
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
                            <td>
                                {/* <button className='btn btn-danger btn-sm m-2' onClick={ () => updatePlayer(eachPlayer._id, gameID, 'playing')}>Playing</button>
                                <button className='btn btn-danger btn-sm m-2' onClick={ () => updatePlayer(eachPlayer._id, gameID, 'not playing')}>Not Playing</button>
                                <button className='btn btn-danger btn-sm m-2' onClick={ () => updatePlayer(eachPlayer._id, gameID, 'undecided')}>Undecided</button> */}
                                {buttonCheck1(eachPlayer, idx)}
                                {buttonCheck2(eachPlayer, idx)}
                                {buttonCheck3(eachPlayer, idx)}
                            </td>
                        </tr>
                    )
                }
                )}
                </tbody>
            </table>

        </div>
    )
}