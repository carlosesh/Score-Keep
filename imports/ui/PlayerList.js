import React from 'react';
import Player from './../ui/Player';
import FlipMove from 'react-flip-move';


const renderPlayers = (playersList) => {
    if (playersList.length === 0) {
        return (
            <div className='item' >
                <p className='item__message'>Add your first player to get started!</p>
            </div>
        );
    } else {
        return playersList.map((player, index) => {
            return (
                <div key={player._id}>
                    <Player key={player._id} player={player} />
                </div>
            );
        });
    }
};

const PlayerList = (props) => {
    return (
        <div>
            <FlipMove>
                {renderPlayers(props.players)}
            </FlipMove>
        </div>
    );
};

export default PlayerList;
