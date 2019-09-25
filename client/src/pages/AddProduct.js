import React, { Component } from "react";
import API from "../utils/API";
import { Redirect } from 'react-router-dom';

class addProduct extends Component  {
  state= {
      name: '',
      category: '',
      price: 0,
      description: '',
      quantity:0,
      image1Url: '',
      image2Url: '',
      image3Url: '',
      logedIn: true
    }

  div1Styles = {
    width: '50vw',
    height: '87vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontFamily: 'Fira Sans',
    fontSize: '1.5rem',
    marginTop: '10vh'
  }

  div2Styles = {
    width: '50vw',
    height: '87vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontFamily: 'Fira Sans',
    fontSize: '1.5rem',
    marginTop: '10vh'
  }

  container = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  inputStyles = {
    borderRadius: '5px',
    width: '40vh',
    height: '2.5rem',
    marginBottom: '1rem'
  }

  textStyles = {
    height: '25vh',
    width: '80%',
    borderRadius: '5px',
    marginBottom: '2rem'
  }
// const submitProduct = () => {

// }
updateNameState = event => {
 console.log(event.target.value);
 this.setState({name: event.target.value})
}
updateCategoryState = event => {
  this.setState({category: event.target.value})
}

updatePriceState = event => {
  console.log(event.target.value);
  this.setState({price: event.target.value})
 }
updateDescriptionState = event => {
  this.setState({description: event.target.value})
}
updateQuantityState = event => {
  this.setState({quantity: event.target.value})
}
updateImage1State = event => {
  this.setState({image1Url: event.target.value})
}
updateImage2State = event => {
  this.setState({image2Url: event.target.value})
}
updateImage3State = event => {
  this.setState({image3Url: event.target.value})
}
postProduct = () => {
  console.log('post product')
  // return this.state.logedIn ? <Redirect to='/'/> : '';
  console.log(this.state)
  const imgArr = [this.state.image1Url, this.state.image2Url, this.state.image3Url]
  const postObj = {
    name: this.state.name,
    category: this.state.category,
    price: this.state.price,
    description: this.state.description,
    quantity: this.state.quantity,
    imageUrls: imgArr
  }
  console.log(postObj)
  API.postProduct(postObj).then(function(dbProduct) {console.log(dbProduct)})
}

render() {
  return (
    <div style={this.container}>
    <div style={this.div1Styles}>
    <p>Product Name:</p>
    <input style={this.inputStyles} type="text" onChange={this.updateNameState}/>
    <p>Product Category:</p>
    <input style={this.inputStyles} type="text" onChange={this.updateCategoryState}/>
    <p>Price:</p>
    <input style={this.inputStyles} type="text" onChange={this.updatePriceState}/>
    
    <p>Quantity:</p>
    <input style={this.inputStyles} type="text" onChange={this.updateQuantityState} />

      <p>Product Image URL #1:</p>
      <input style={this.inputStyles} type="text" onChange={this.updateImage1State}/>
    </div>
      <div style={this.div2Styles}>

        <p>Product Image URL #2:</p>
        <input style={this.inputStyles} type="text" onChange={this.updateImage2State}/>
        <p>Product Image URL #3:</p>
        <input style={this.inputStyles} type="text" onChange={this.updateImage3State}/>

        <p>Product Description:</p>
        <textarea style={this.textStyles} type="text" onChange={this.updateDescriptionState}/>
        <button onClick={this.postProduct}>Add Product</button>
      </div>
      
    </div>

  )
  
}
 



}
export default addProduct;
