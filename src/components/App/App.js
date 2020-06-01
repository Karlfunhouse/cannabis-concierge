import React, { useEffect, useContext } from 'react';
import './App.css';
import Login from '../Login/Login.js';
import { Switch, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar.js';
import CategoryCards from '../CategoryCards/CategoryCards.js';
import CardsContainer from '../CardsContainer/CardsContainer.js';
import ExpandedCard from '../ExpandedCard/ExpandedCard';
import { WeedStoreContext } from '../../WeedStore';
import MedicalFilter from '../MedicalFilter/MedicalFilter';
import ActivityFilter from '../ActivityFilter/ActivityFilter';

const App = () => {

  const weedStore = useContext(WeedStoreContext);

  useEffect(() => {
    weedStore.fetchData();
    console.log(weedStore.userInfo);
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route
          path="/quiz"
          component={() => (
            <div>
              <NavBar />
            </div>
          )}
        />
        <Route
          path="/medicinal"
          component={() => (
            <div>
              <NavBar />
              <MedicalFilter />
              <CardsContainer />
              <ExpandedCard />
            </div>
          )}
        />
        <Route
          path="/expanded_view"
          component={() => (
            <div>
              <NavBar />
              <ExpandedCard />
            </div>
          )}
        />
        <Route
          path="/mood"
          component={() => (
            <div>
              <NavBar />
            </div>
          )}
        />
        <Route
          path="/activity"
          component={() => (
            <div>
              <NavBar />
              <ActivityFilter />
              <CardsContainer />
            </div>
          )}
        />
        <Route
          path="/home"
          component={() => (
            <div className="home-page">
              <NavBar />
              <CategoryCards />
            </div>
          )}
        />
        <Route path="/" component={() => <Login />} />
      </Switch>
    </div>
  );
}

export default App;
