import { Link, Route, useParams } from 'react-router-dom';
import { PlayerStatus } from '../components/PlayerStatus';

import React, { useEffect } from 'react'

const Status = () => {
    const {gamenum} = useParams();

    let gameID = 'game' + gamenum;

    
    return (
        <div>
            <h1>Status for Game {gamenum}</h1>
            <div className="m-2 d-inline">
                <Link to={'/status/game/1'}>Game 1</Link>
            </div>
            <div className="m-2 d-inline">
                <Link to={'/status/game/2'}>Game 2</Link>
            </div>
            <div className="m-2 d-inline">
                <Link to={'/status/game/3'}>Game 3</Link>
            </div>

            <PlayerStatus gameID={gameID}/>
            
            
        </div>
    )
}

export default Status