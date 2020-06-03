import React, { useContext } from "react";
import "./NavBar.css";
import { WeedStoreContext } from "../../WeedStore";
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
  const weedStore = useContext(WeedStoreContext);

  return (
    <header>
      <div className="logo-area">
        <Link to="/home" >
          <img
            src="/assets/weedbutler.png"
            alt="weed butler logo"
            className="logo-icon"
          />
        </Link>
        <div className="logo-words">
          <h2>
            Welcome to <span>Cannabis</span> Concierge
          </h2>
          <h3>
            We are here to help you find your <span>high</span>
          </h3>
        </div>
      </div>
      <div className="user-info">
        <h3>Welcome, {weedStore.userInfo}</h3>
        <div className="menu-buttons">
          <button type="button" className="button favorite-button">
            Favorites - {weedStore.favoritedStrains.length}
          </button>
          <Link to="/">
            <button type="button" className="button logout-button">
              Logout
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
});
export default NavBar;
