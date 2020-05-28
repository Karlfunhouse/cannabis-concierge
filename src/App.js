import React, { useEffect } from 'react';
import './App.css';
import { allStrainsData } from './apiRequest'
import store from './WeedStore'

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
    </div>
  );
}

export default App;
