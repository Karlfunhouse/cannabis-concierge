import React, { useEffect, useContext } from 'react';
import './App.css';
import { allStrainsData } from '../../apiRequest';
import store from '../../WeedStore';
import Login from '../Login/Login.js';
import { Switch, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar.js';
import CardsContainer from '../CardsContainer/CardsContainer.js';
import { WeedStoreContext } from '../../WeedStore';
import { observer } from 'mobx-react-lite';

const App = observer(() => {

  const weedStore = useContext(WeedStoreContext);

  useEffect(() => {
    weedStore.fetchData();
    console.log(weedStore.userInfo);
  }, [weedStore])

  return (
    <div className="App">
      <Switch>
        <Route path='/home' component= { () => (
          <div className='home-page'>
            <NavBar />
            {/* <CardsContainer /> */}
          </div>
        ) } />
        <Route path='/' component= { () => <Login /> } />
      </Switch>
    </div>
  );
})

export default App;
