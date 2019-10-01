import React, {useState, useEffect} from 'react';
import "./style.css";
import {Input} from "../Form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import API from '../../utils/API';
import { Redirect } from 'react-router-dom';


// var FontAwesome = require('react-fontawesome');

function Nav(props) {
  const [state, setState] = useState({
    productsInCart: 0
  })

  const redirectAddProduct = () => {
    setState({addProductClicked: true})
  }
  useEffect(() => {
    let getGuestCartId = localStorage.getItem('guestCartId');
    API.getGuestCart(getGuestCartId).then(response => {
      console.log(response.data.products.length)
      setState({productsInCart:  response.data.products.length})
    })
  }, [props.productsInCart]);

  const cartNum = {
    color: 'white'
  }
  return (
    // state.addProductClicked ? 
    //     <Redirect to={{
    //       pathname: '/addProduct'
    //     }}/> : 
    <div>
      <div className="navbar-top">
        <div className="navbar-top-left">
        <div><hr className="top-line"/></div>
        <div className="logo-title-div"><h1 className="logo-title">Cart-Blanche</h1></div>
        <div><hr className="bottom-line"/></div>
        
        </div>
        <div className="navbar-top-middle"><input className="form-control search-bar"/><button className="search-button">
        {/* <FontAwesome name="search" size="1x" className="search-glass" /> */}
        <FontAwesomeIcon icon={faSearch} className='icon' />
        </button></div>
        <div className="navbar-top-right">
        <div className="ntr-left">
        <FontAwesomeIcon icon={faShoppingCart} className="cart icon" size="2x"/>
        <h6 style={cartNum}>{state.productsInCart}</h6>
        </div>
        <div className="ntr-right">
        <nav className="navbar navbar-dark">
        <a className="navbar-brand" href="/">Login</a>
        <a className="navbar-brand" href="/">Logout</a>
        </nav>
        </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark nav-bar">
        <a className="navbar-brand" href="/">
          Shop
        </a>
        <a className="navbar-brand" href="/addProduct" onClick={redirectAddProduct}>
          Add Product
        </a>
        {/* <a className="navbar-brand" href="/">
          Edit Product
        </a> */}
      </nav>

    </div>
  );
}

export default Nav;
