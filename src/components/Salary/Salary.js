import React from 'react';

const Salary = (props) => {

    const countPlayer = props.countPlayer;
    const totalBudget = countPlayer.reduce((sum, player) => sum + player.salary, 0);

    return (
        <div>
            <h1>Total Budget: {totalBudget} lac BDT</h1>
        </div>
    );
};

export default Salary;