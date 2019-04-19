import React from 'react';

import { Players } from './../api/players';

const addPlayerHandler = (e) => {
    let playerName = e.target.playerName.value;

    e.preventDefault();

    if (playerName) {
        e.target.playerName.value = '';
        Players.insert({
            name: playerName,
            score: 0
        });
    }
};

const AddPlayer = () => {
    return (
        <div className='item'>
            <form className='form' onSubmit={addPlayerHandler}>
                <input className='form__input' type='text' name='playerName' placeholder='Player name' />
                <button className='button'>Add Player</button>
            </form>
        </div>
    );
}

export default AddPlayer;