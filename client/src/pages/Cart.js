import React, {useState, useEffect} from 'react';
import '../components/Nav/style.css';
import { Redirect } from 'react-router-dom';
import Nav from "../components/Nav";
import API from "../utils/API";
import CartProduct from "../components/CartProduct/CartProduct";
import classes from "./Cart.css"
import Footer from "../components/Footer/Footer"
const Cart = (props) => {

  const [state, setState] = useState({
    cartProducts: [],
    guestCartId: localStorage.getItem('guestCartId') || '',
    cartPrice: 0,
    backToShopClicked: false,
    checkoutClicked: false
  });

  useEffect(() => {
    let getGuestCartId = localStorage.getItem('guestCartId');
    API.getGuestCart(getGuestCartId).then(response => {
      if(response.data != null) {
        console.log('response data', response.data.products)
        let totalPrice = 0;
        for(let i=0; i<response.data.products.length; i++) {
          totalPrice= totalPrice + response.data.products[i].item.price * response.data.products[i].quantity
        }
        setState({cartProducts:  response.data.products, cartPrice: totalPrice, guestCartId: localStorage.getItem('guestCartId')})
      }

    })
  }, []);

  const updateCartQuanity = (event) => {
    console.log("chage quanty to", event.target.value);
  }
  const cartContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1rem'
  }

const cartHeader = {
  marginBottom: '1.5rem'
}
const completePurchaseButton = {
  color: 'white',
  background: 'black',
  border: '1px solid black',
  borderRadius: '5px',
  margin: '1rem'
}
const buttonContainer = {
  width: '50vh',
  display: 'flex',
  justifyContent: 'space-around'
}
const backToShopButton = {
  background: 'white',
  border: '1px solid black',
  borderRadius: '5px',
  margin: '1rem'
}

const backToShop = () => {
  setState({backToShopClicked: true})
}

const updateCart = (updatedArr) => {

    const updatedArrCopy = [...updatedArr];
    let postArr =[]
    for(let i=0; i<updatedArrCopy.length; i++){
      postArr[i] = {
        item: updatedArrCopy[i].item._id,
        quantity: updatedArrCopy[i].quantity
      }
    }

    var postObj = {
      products: postArr
    }

    API.postEditGuestCart(state.guestCartId, postObj).then(response => {
      API.getGuestCart(state.guestCartId).then(response => {
        console.log('response data', response.data.products)
      if(response.data.products !== undefined) {
        let totalPrice = 0;
        for(let i=0; i<response.data.products.length; i++) {

          totalPrice= totalPrice + response.data.products[i].item.price * response.data.products[i].quantity
        }
        setState({cartProducts:  response.data.products, cartPrice: totalPrice, guestCartId: localStorage.getItem('guestCartId') || ''})
      }
      else return;

      })
    })
}
const checkout = () => {
  // console.log("this is your page", props.history.location.pathname)
  setState({checkoutClicked: true})
}

const deleteProductFromCart = (index) => {
    console.log([...state.cartProducts]);
    const stateProductsCopy = [...state.cartProducts];
    stateProductsCopy.splice(index, 1);
    console.log("newProductsArray:", stateProductsCopy);
    let postArr =[]
    for(let i=0; i<stateProductsCopy.length; i++){
      postArr[i] = {
        item: stateProductsCopy[i].item._id,
        quantity: stateProductsCopy[i].quantity
      }
    }
    var postObj = {
      products: postArr
    }
    API.postEditGuestCart(state.guestCartId, postObj).then(response => {
      API.getGuestCart(state.guestCartId).then(response => {
        console.log('response data', response.data.products)
      if(response.data.products !== undefined) {
        let totalPrice = 0;
        for(let i=0; i<response.data.products.length; i++) {
          totalPrice= totalPrice + response.data.products[i].item.price * response.data.products[i].quantity
        }
        setState(
            {
              cartProducts:  response.data.products, 
              cartPrice: totalPrice, 
              guestCartId: localStorage.getItem('guestCartId') || ''
            }
        )
      }
      else return;

      })
    })
}
  return(
    state.backToShopClicked ? 
        <Redirect to={{
          pathname: '/'
        }}/> : 
          state.checkoutClicked ? 
            <Redirect to={{
            pathname: '/checkout'
            }}/> :
    <div>
      <Nav location={props.history.location.pathname}/>
      <div style={cartContainer} className='Cart'>
      <h1 style={cartHeader}>Your Cart Total: $ {state.cartPrice} </h1>
      <div style={buttonContainer}>
        <button 
            style={completePurchaseButton} 
            className='button' 
            onClick={checkout}>
              Checkout
        </button>
        <button 
            style={backToShopButton} 
            className='button' 
            onClick={backToShop}>
              Back to shop
        </button>
      </div>
          {state.cartProducts.map( (product, index) => 
            <CartProduct 
                products={state.cartProducts} 
                index={index} 
                updateCart={updateCart} 
                delete={deleteProductFromCart}/>
        )}
      </div>
      <Footer/>
    </div>
   
  )
}

export default Cart;