import { Link, Route, Switch, useParams } from 'react-router-dom';
import PlayerForm from '../components/PlayerForm';
import { PlayerList } from '../components/PlayerList';

import React from 'react'

const Home = () => {
    const {loc} = useParams();

    const display = () => {
        if (loc == 'list') {
            return(<PlayerList />)
        } else if (loc == 'addplayer'){
            return(<PlayerForm />)
        }
        }
    return (
        <div>
            <div className="m-2 d-inline">
                <Link to={'/players/list'}>List</Link>
            </div>
            <div className="m-2 d-inline">
                <Link to={'/players/addplayer'}>Add Player</Link>
            </div>
            {display()}
            
            
            
        </div>
    )
}

export default Home