import React from "react";
import "./style.css";
import {Input} from "../Form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// var FontAwesome = require('react-fontawesome');

function Nav() {
  return (
    <div>
      <div className="navbar-top">
        <div className="navbar-top-left">
        <div><hr className="top-line"/></div>
        <div className="logo-title-div"><h1 className="logo-title">Cart-Blanche</h1></div>
        <div><hr className="bottom-line"/></div>
        
        </div>
        <div className="navbar-top-middle"><input className="form-control search-bar"/><button className="search-button">
        {/* <FontAwesome name="search" size="1x" className="search-glass" /> */}
        <FontAwesomeIcon icon={faSearch} />
        </button></div>
        <div className="navbar-top-right"></div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark nav-bar">
        <a className="navbar-brand" href="/">
          React Reading List
        </a>
      </nav>

    </div>
  );
}

export default Nav;
