import React from 'react';
import './Players.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Players = (props) => {

    const { name, img, salary } = props.player;
    const handleSelectedPlayer = props.handleSelectedPlayer;

    return (
        <div className="player-style shadow">
            <div>
                <img src={img} alt="" />
                <h4>Name: {name}</h4>
                <p>Salary: {salary} Lac BDT</p>
                <Button variant="danger" onClick={() => handleSelectedPlayer(props.player)}><FontAwesomeIcon icon={faCheck} /> Select</Button>
            </div>
        </div>
    );
};

export default Players;