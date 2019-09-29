import React from 'react';

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

   const addToCart = () => {
     console.log('add to cart called')
   }

  return (
    <div style={containerStyles}>
      <div style={imageDiv}>
        <div style={largeImageContainer}>
          <img src={props.location.state.imageUrls[0]} alt=""/>
        </div>
        <div style={SmallImageContainer}>
          <img style={firstSmallImage} src={props.location.state.imageUrls[1]} alt=""/>
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
        <button style={addCartButton} onClick={addToCart} className='button'>Add To Cart</button>
        <button style={backShopButton} className='button' >Back To Shop</button>
        </div>
      </div>
    </div>
  )
}

export default viewProduct;