import React from 'react';
import './Login.css';
import store from '../../WeedStore';

const Login = () => {

  const changeHandler = (e) => {
    store.userInfo = e.target.value;
  }

  return (
    <main>
      <form>
        <h2>Welcome to <span>Cannabis</span> Concierge</h2>
        <h3>We are here to help you find your <span>high</span></h3>
        <img src='/assets/weedbutler.png' alt='weed butler logo' className='login-logo'/>
        <h2><span>Cannabis</span> Concierge is for adults</h2>
        <input placeholder='username' className='username-input' value={store.userInfo}></input>
        <div className="login-btn-holder">
          <button type='button' className='age-btns green-btn'>I'm 21+</button>
          <button type='button' className='age-btns red-btn'>I'm not 21 yet</button>
        </div>
      </form>
    </main>
  )
}


export default Login;
