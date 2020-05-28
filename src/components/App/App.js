import React, { useEffect } from 'react';
import './App.css';
import { allStrainsData } from '../../apiRequest';
import store from '../../WeedStore';
import Login from '../Login/Login.js'

function App() {

  useEffect(() => {
    let fetchData = async () => {
      let data = await allStrainsData()
        store.allStrains = data
        console.log(store.allStrains);
      }
      fetchData()
    }, [])

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
