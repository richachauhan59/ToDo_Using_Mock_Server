import React from 'react';
import './App.css';
import ToDo from './TODO/ToDo'
import Routes from './Components/Routes'

function App() {
  return (
    <div className="App">
     <h1>Todo</h1>
     <Routes/>
     {/* <ToDo/> */}
    </div>
  );
}

export default App;
