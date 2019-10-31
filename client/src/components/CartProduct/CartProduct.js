import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';


// import '../components/Nav/style.css';
// import { Redirect } from 'react-router-dom';
// import Nav from "../components/Nav";
// import API from "../utils/API";
// import CartProduct from "../components/CartProduct/CartProduct";


const CartProduct = (props) => {
 
  const cartItem = {
    width: '60vw',
    border: '.5px solid gray',
    borderRadius: '5px',
    margin: '.5rem',
    display: 'flex',
    alignItems: 'center'
  }

  const cartItemImage = {
    width: '100%'
  }

  const imageContainer = {
    width: '20%'
  }
  const productNameContainer = {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem'
  }
  const inputStyle = {
    width: '15%'
  }
  const productOptions = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
  const [state, setState] = useState({
    quantity: 0
  });
  useEffect(() => {

      setState({quantity: props.products[props.index].quantity})
   
  }, []);
  const updateCartQuanity = (event) => {
    setState({quantity: event.target.value});
   
    let index = event.target.getAttribute('data-ref');
    props.products[index].quantity =  Number(event.target.value);
    props.updateCart(props.products)
    // console.log(props.products)
   
    // let cartCopy = props.products;
   
    // props.updateCart()
  }
  // const deleteProductFromCart = (event) => {
  //   console.log('products:', state.products);
  //   console.log("index", props.index);
    
  // }

  return (
    <div style={cartItem}>
      <div style={imageContainer}>
        <img src={props.products[props.index].item.imageUrls[0]} alt="" style={cartItemImage}/> 
      </div>
      <div style={productNameContainer}>
      <h4>{props.products[props.index].item.name}</h4>
      </div>
      <div style={productOptions}>
        <input type="text" style={inputStyle} value={state.quantity} onChange={updateCartQuanity} data-ref={props.index}/>
        <FontAwesomeIcon icon={faTimes} className='icon' onClick={() => props.delete(props.index)}/>
      </div>
      
    </div>
  )
}

export default CartProduct;