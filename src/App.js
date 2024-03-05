import React from "react";
import PlayersList from "./component/PlayersList";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
   <div>
      <div className="App">
      <h1 style={{fontSize:"25",color:"blue"}}>FIFA Player Cards</h1>
      <PlayersList />
    </div>
   </div>
  );
}

export default App;
