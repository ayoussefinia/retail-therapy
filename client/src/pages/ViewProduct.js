import React, {useState} from 'react';
import '../components/Nav/style.css';
import { Redirect } from 'react-router-dom';
import Nav from "../components/Nav";
import API from "../utils/API";
import AddToCartModal from "../components/modals/AddCartModal";
import AddCartCard from "../components/Cards/AddCartCard";
const viewProduct = (props) => {
  const containerStyles = {
    height: '100vh',
    padding: '1rem',
    display: 'flex'
   }
   const imageDiv = {
     height: '100%',
     width: '35vw',
    //  borderTop: '1px solid black',
    //  borderLeft: '1px solid black',
    //  borderBottom: '1px solid balck'
   }
   const largeImageContainer = {
      margin: '.25rem'
   }
   const SmallImageContainer = {
      width: '100%'
   }
   const firstSmallImage = {
      margin: '.25rem'
   }
   const secondSmallImage = {
     margin: '.25rem'
   }
   const infoDiv = {
     width: '70vw',
    //  border: '1px solid black',
     height: '100vh'
   }
   const productTitle = {
     width: '100%',
     display: 'flex',
     justifyContent: 'center'
   }
   const productDesc = {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1rem',
      padding: '1rem'
   }
   const productStats = {
     width: '100%',
     display: 'flex',
     fontSize: '1rem',
     height: '2rem'
   }
   const stat = {
     width: '33.3%',
     display: 'flex',
     justifyContent: 'center'
   }

   const buttonDiv = {
     width: '100%',
     display: 'flex',
     justifyContent: 'center',
     padding: '1rem'
   }
   const addCartButton = {
     color: 'white',
     background: 'black',
     border: '1px solid black',
     borderRadius: '5px',
     margin: '1rem'
   }
   const backShopButton = {
    background: 'white',
    border: '1px solid black',
    borderRadius: '5px',
    margin: '1rem'
   }

   const [state, setState] = useState({
    backToShopClicked: false,
    product: props.location.state,
    isLoggedIn: false,
    guestCartId: localStorage.getItem('guestCartId') || '',
    quantity: 0,
    productsInCart: 0,
    addToCartClicked: false

  })

  const showAddToCartModal = () => {
    const stateCopy = {...state};
    stateCopy.addToCartClicked = true;
    setState(stateCopy);
  }

   const addToCart = () => {
  
     // in the case that this is the first item in the guest cart
    if(!state.isLoggedIn && state.guestCartId.length <= 0) {

      var product = {
        item: state.product._id,
        quantity: state.quantity
      }
      let postObj = {
        products: [product]
      }
    
      API.createGuestCart(postObj).then(response => {
        // console.log(response.data._id)
        // const stateCopy = {...state};
        // stateCopy.guestCartId = response.data._id;
        // setState(stateCopy)
        localStorage.setItem('guestCartId', response.data._id);
        let stateCopy = {...state}
        stateCopy.addToCartClicked = false;
       
        setState(stateCopy)
      })
    //if theres a guest cart with products in it
    } else if (!state.isLoggedIn && state.guestCartId.length >= 0) {
      console.log('post to temporary cart')
      API.getGuestCart(state.guestCartId).then(response => {
        console.log(response);
        let postObj;
        if(response.data != null){
          console.log(response.data.products);
          let productsArr = response.data.products;
          let newProduct = {
            item: state.product._id,
            quantity: state.quantity
          }
          productsArr.push(newProduct);
          console.log(productsArr);
          postObj = {
            products: productsArr
          }
        } else if(response.data == null) {
          let productsArr =[];
          let newProduct = {
            item: state.product._id,
            quantity: state.quantity
          }
          productsArr.push(newProduct);
          console.log(productsArr);
          postObj = {
            products: productsArr
          }
        }
        API.postEditGuestCart(state.guestCartId, postObj).then(response => {
          console.log("posted product to cart?", response)
          const stateCopy = {...state}
          stateCopy.productsInCart = response.data.products.length;
          
          stateCopy.addToCartClicked = false;
        
          
          setState(stateCopy);
        })
      } ).catch(err => console.log(err))
    }
   }
   const changeQuantity = (event) => {
    console.log("changing state", event.target.value)
    const stateCopy = {...state}
    stateCopy.quantity = Number(event.target.value);
    console.log(stateCopy);
    setState(stateCopy);
   }
   const cancel = () => {
     const stateCopy = {...state};
     stateCopy.addToCartClicked = false;
     setState(stateCopy);
   }

   const backToShop = () => {
    setState({backToShopClicked: true});
   }

  return (
   state.backToShopClicked ? 
        <Redirect to={{
          pathname: '/'
        }}/> :

    <div>
      <Nav productsInCart={state.productsInCart}/>

        { state.addToCartClicked ? 
        
        <AddToCartModal product={state.product} cancel={cancel} changeQuantity={changeQuantity} addToCart={addToCart}> <AddCartCard product={state.product}/> </AddToCartModal>: ''}

    <div style={containerStyles}>
      <div style={imageDiv}>
        <div style={largeImageContainer}>
          <img src={props.location.state.imageUrls[0]} alt=""/>
        </div>
        <div style={SmallImageContainer}>
          <img style={firstSmallImage} src={state.product.imageUrls[1]} alt=""/>
          <img style={secondSmallImage} src={props.location.state.imageUrls[2]} alt=""/>
        </div>
      </div>
      <div style={infoDiv}>
        <div style={productTitle}>
          <h1>{props.location.state.name}</h1>
        </div>
        <div style={productDesc}>
          <p>{props.location.state.description}</p>
        </div>
        <div style={productStats}>
          <div style={stat}><strong>Price: </strong> &nbsp;  ${props.location.state.price}</div>
          <div style={stat}><strong>In Stock: </strong> &nbsp; {props.location.state.quantity}</div>
          <div style={stat}><strong>Category: </strong> &nbsp; {props.location.state.category}</div>
        </div>
        <div style={buttonDiv}>  
        <button style={addCartButton} onClick={showAddToCartModal} className='button'>Add To Cart</button>
        <button style={backShopButton} className='button' onClick={backToShop}>Back To Shop</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default viewProduct;