import React, { useEffect } from 'react';

import './App.css';
import { allStrainsData } from './apiRequest'

function App() {


 useEffect(() => {
     let fetchData = async () => {
       let data = await allStrainsData()
       console.log(data);
       
     }
     fetchData()
    }, [])
  
   

  return (
    <div className="App">
    </div>
  );
}

export default App;
