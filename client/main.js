import React from 'react';
import ReactDOM from 'react-dom';
import App from './../imports/ui/App';

import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Players , calculatePlayerPositions} from './../imports/api/players';

Meteor.startup(() => {
    Tracker.autorun(() => {
        let players = Players.find({}, {sort: {score: -1}}).fetch();
        let positionedPlayers = calculatePlayerPositions(players);
        let title = 'Score Keep';
        ReactDOM.render(<App title={title} players={positionedPlayers}/>, document.getElementById('app'));
    });
});
