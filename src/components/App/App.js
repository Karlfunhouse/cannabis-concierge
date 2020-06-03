import React, { useEffect, useContext } from 'react';
import './App.css';
import { observer } from "mobx-react-lite";
import Login from '../Login/Login.js';
import { Switch, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar.js';
import CategoryCards from '../CategoryCards/CategoryCards.js';
import StrainCards from '../StrainCards/StrainCards.js';
import ExpandedCard from '../ExpandedCard/ExpandedCard';
import { WeedStoreContext } from '../../WeedStore';
import MedicalAndEffectsFilter from '../MedicalAndEffectsFilter/MedicalAndEffectsFilter';
import ActivityFilter from '../ActivityFilter/ActivityFilter';


const App = observer(() => {

  const weedStore = useContext(WeedStoreContext);

  useEffect(() => {
    weedStore.fetchData();
    // weedStore.updateLoginName()
    console.log(weedStore.currentStrain);
    weedStore.populateDataFromLS();
  }, [weedStore])

  return (
    <div className="App">
      <Switch>
        <Route
          path="/expanded_view/:strain_name"
          component={() => (
            <div>
              <NavBar />
              <ExpandedCard />
            </div>
          )}
        />
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
              <MedicalAndEffectsFilter />
              <StrainCards />
            </div>
          )}
        />
        <Route
          path="/mood"
          component={() => (
            <div>
              <NavBar />
              <MedicalAndEffectsFilter />
              <StrainCards />
            </div>
          )}
        />
        <Route
          path="/activity"
          component={() => (
            <div>
              <NavBar />
              <ActivityFilter />
              <StrainCards />
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
})

export default App;
