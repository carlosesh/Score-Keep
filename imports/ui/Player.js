import React from 'react';
import PropTypes from 'prop-types';

import { Players } from './../api/players';

const Player = (props) => {
    return (
        <div>
            <div key={props.player._id} className='item'>
                <div className='player'>
                    <div>
                        <h3 className='player__name'>{props.player.name}</h3>
                        <p className='player__stats'>
                            has {props.player.score} point(s).
                    </p>
                    </div>
                    <div className='player__actions'>
                        <button className='button button--round' onClick={() => Players.remove(props.player._id)}>X</button>
                        <button className='button button--round' onClick={() => Players.update({ _id: props.player._id }, { $inc: { score: 1 } })}>+1</button>
                        <button className='button button--round' onClick={() => Players.update({ _id: props.player._id }, { $inc: { score: -1 } })}>-1</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Player.propTypes = {
    player: PropTypes.object.isRequired
}

export default Player;