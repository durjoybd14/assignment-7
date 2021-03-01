import React from 'react';

const SelectedPlayers = (props) => {

    const countPlayer = props.countPlayer
    const SelectedPlayers = countPlayer.reduce((sum, player) => sum + player.name + ' , ', []);

    return (
        <div>
            <p>{SelectedPlayers}</p>
        </div>
    );
};

export default SelectedPlayers;