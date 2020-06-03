import React, { useContext, useState, useEffect } from "react";
import './Login.css';
import { WeedStoreContext } from "../../WeedStore";
import { Link } from 'react-router-dom';

const Login = () => {
  const weedStore = useContext(WeedStoreContext);
  const [errorMsg, addError] = useState('')
  const [alertClass, addAlertClass] = useState('hide')
  
  const changeHandler = (e) => {
    weedStore.updateLoginName(e.target.value);
    console.log(weedStore.userInfo);
  }
  
  const saveToStorage = () => {
    let name =  weedStore.userInfo
    localStorage.setItem("userName", name);
  }

  const errorMessage = (e) => {
    e.preventDefault();
    addError('Please enter your username')
  }

  return (
    <main>
      <form>
        <h2>Welcome to <span>Cannabis</span> Concierge</h2>
        <h3>We are here to help you find your <span>high</span></h3>
        <img src='/assets/weedbutler.png' alt='weed butler logo' className='login-logo'/>
        <h2><span>Cannabis</span> Concierge is for adults</h2>
        <input placeholder='username' className='username-input' onChange={changeHandler}></input>
        <div className="login-btn-holder">
          <Link onClick={ (e) => {!weedStore.userInfo && errorMessage(e)} } to='/home'>
            <button type='button' className='age-btns green-btn' onClick={() => saveToStorage()}>I'm 21+</button>
          </Link>
          <button onClick={() =>  addAlertClass(null)} type='button' className='age-btns red-btn'>I'm not 21 yet</button>
          <p className="error-msg">{errorMsg}</p>
          <div className={alertClass}><h3 className="age-alert">Come back and see us when you're 21!</h3></div>
        </div>
      </form>
    </main>
  )
}

export default Login;
