import React, { useEffect } from 'react';
import './App.css';
import { allStrainsData } from '../../apiRequest';
import store from '../../WeedStore';
import Login from '../Login/Login.js';
import { Switch, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar.js';
import CardsContainer from '../CardsContainer/CardsContainer.js';

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
      <Switch>
        <Route path='/home' component= { () => (
          <div className='home-page'>
            <NavBar />
            <CardsContainer />
          </div>
        ) } />
        <Route path='/' component= { () => <Login /> } />
      </Switch>

    </div>
  );
}

export default App;
