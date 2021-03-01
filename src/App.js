import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import Players from "./components/Players/Players";
import playerDetails from './fake-data/fake-data.json';
import Salary from "./components/Salary/Salary";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [players, setPlayers] = useState([]);
  useEffect(() => {
    setPlayers(playerDetails);
  }, []);

  const [countPlayer, setCountPlayer] = useState([]);

  const handleSelectedPlayer = (playerData) => {

    if (countPlayer.indexOf(playerData) === -1) {
      const newCountPlayer = [...countPlayer, playerData];
      setCountPlayer(newCountPlayer)
    }

    else {
      alert('This player already exists in the team');
    }

  }

  return (
    <div className="container mt-5">
      <header>
        <div className="text-center mb-5 border shadow rounded-lg p-5">
          <h1><FontAwesomeIcon className="trophy" icon={faTrophy} /> Bangladesh T20 Leauge 2021 <FontAwesomeIcon className="trophy" icon={faTrophy} /></h1>
          <h2>Player Selection for Team Bengole Tigers</h2>
        </div>

        <h3>Total Selected Player: {countPlayer.length}</h3>
        <Salary countPlayer={countPlayer}></Salary>
      </header>

      <div className="row mt-5">
        <div className="player-container col-lg-8 ">
          {
            players.map(player => <Players player={player} key={player.id} handleSelectedPlayer={handleSelectedPlayer}></Players>)
          }
        </div>

        <div className="col-lg-4 mt-5">
          <h5 className="text-center">Selected players:</h5>
          <SelectedPlayers countPlayer={countPlayer}></SelectedPlayers>
        </div>

      </div >
    </div >

  );
}

export default App;
