import React, { useContext } from "react";
import './Login.css';
import { WeedStoreContext } from "../../WeedStore";
import { Link } from 'react-router-dom';

// import { useWeedStore } from '../../hooks.js';

const Login = () => {
  const weedStore = useContext(WeedStoreContext);

  const changeHandler = (e) => {
    weedStore.userInfo = e.target.value;
    console.log(weedStore.userInfo);
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
          <Link to='/home'>
            <button type='button' className='age-btns green-btn'>I'm 21+</button>
          </Link>
          <button type='button' className='age-btns red-btn'>I'm not 21 yet</button>
        </div>
      </form>
    </main>
  )
}


export default Login;
