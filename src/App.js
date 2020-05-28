import React, { useEffect } from 'react';
import './App.css';
import { allStrainsData } from './apiRequest'
import store from './WeedStore'

function App() {


//  useEffect(() => {
//      let fetchData = async () => {
//        let data = await allStrainsData()

//      }
//      fetchData()
//     }, [])
  
   console.log(store)

  return (
    <div className="App">
    </div>
  );
}

export default App;
