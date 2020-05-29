import React, { useEffect, useContext } from 'react';
import './App.css';
import { WeedStoreContext } from '../../WeedStore';
import Login from '../Login/Login.js';
import { observer } from "mobx-react-lite";


const App = observer(() => {
  const weedStore = useContext(WeedStoreContext)

  useEffect(() => {
    weedStore.fetchData()
    console.log(weedStore.userInfo);
    }, [weedStore])

  return (
    <div className="App">
      <Login />
    </div>
  );
})

export default App;
