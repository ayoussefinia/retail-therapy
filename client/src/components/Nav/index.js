import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import "./style.css";
import {Input} from "../Form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import API from '../../utils/API';
import { Redirect } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import {logoutUser} from '../../actions/authActions'
import 'react-dropdown/style.css';


// var FontAwesome = require('react-fontawesome');

function Nav(props) {
 
  const options = [
    { value: 'Category:', label: '' },
    { value: '1', label: 'Electronics' },
    { value: '2', label: 'Apparel'},
    { value: '3', label: 'Shoes' },
    { value: '4', label: 'Books' },
    { value: '5', label: 'Food' },
    { value: '6', label: 'Sporting Goods' },
    { value: '7', label: 'Accessories' }
  ];
  const defaultOption = options[0];

  const [state, setState] = useState({
    productsInCart: 0
  });


  const redirectAddProduct = () => {
    setState({addProductClicked: true})
  }
  useEffect(() => {
    let getGuestCartId = localStorage.getItem('guestCartId');
    API.getGuestCart(getGuestCartId).then(response => {
      if(response.data != null) {
        setState({productsInCart:  response.data.products.length})
      }
      
    })
  }, [props.productsInCart]);

  const cartNum = {
    color: 'white'
  }
  const _onSelect = {

  }
  const dropDownContainer = {
    borderRadius: '5px'
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

          {props.location == '/' ?
          <div className="navbar-top-middle">
          {props.searchCategory? 

            <Dropdown options={options} onChange={props.searchCategory} value={props.selection} placeholder={props.selection} className='navDropdwon' controlClassName='control' /> 
          
          : ''}
          
          
            <input onChange={props.search} className="form-control search-bar"/>
            <button className="search-button">  
          

          {/* <FontAwesome name="search" size="1x" className="search-glass" /> */}
          <FontAwesomeIcon icon={faSearch} className='icon' />
          </button>
          </div> 
          : ''
          }
        <div className="navbar-top-right">
        <div className="ntr-left">
        <a href="/cart"> <FontAwesomeIcon icon={faShoppingCart} className="cart icon" size="2x" /></a>
        <h6 style={cartNum}>{state.productsInCart}</h6>
        </div>
        <div className="ntr-right">
        <nav className="navbar navbar-dark">
        {/* <a className="navbar-brand" href="/login">Login</a>
        <a className="navbar-brand" href="/">Logout</a> */}
        </nav>
        </div>
        </div>
        {props.auth.isAuthenticated ? <button onClick={props.logoutUser} className='logout-button'>Logout</button> :  <a href="/login" className='login-link'>Login</a>}
       
        
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark nav-bar">
        <a className="navbar-brand" href="/">
          Shop
        </a>
        
        <a className="navbar-brand" href="/addProduct" onClick={redirectAddProduct}>
          Add Product
        </a> 
        <a className="navbar-brand" href="/myProducts">
          My Products
        </a>
        <a className="navbar-brand" href="/myOrders">
          My Orders
        </a>
        {/* <a className="navbar-brand" href="/">
          Edit Product
        </a> */}
    
      </nav>

    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {logoutUser})(Nav);

