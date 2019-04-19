import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

const App = (props) => {
    return (
        <div>
            <TitleBar title={props.title} subtitle='Created by Carlos Sanchez'/>
            <div className='wrapper'>
                <PlayerList players={props.players} />
                <AddPlayer/>
            </div>
        </div>
    );
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired
}

export default App;