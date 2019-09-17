import React, { Component } from "react";
import API from "../utils/API";

class editProduct extends Component  {
  state= {
      name: '',
      category: '',
      price: 0,
      description: '',
      quantity:0,
      imageUrl: '',
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

componentDidMount = () => {
  this.setState({
    name: this.props.location.state.name,
    category: this.props.location.state.category,
    price: this.props.location.state.price,
    description: this.props.location.state.description,
    quantity: this.props.location.state.quantity,
    imageUrl: this.props.location.state.imageUrl
  })
}


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
updateImageyState = event => {
  this.setState({imageUrl: event.target.value})
}
postProduct = () => {
  console.log(this.state)
  API.postProduct(this.state).then(function(dbProduct) {console.log(dbProduct)})
}

render() {
  
  return (
    
    <div style={this.container}>
    <div style={this.div1Styles}>
    <p>Product Name:</p>
    <input style={this.inputStyles} type="text" onChange={this.updateNameState} value={this.state.name}/>
    <p>Product Category:</p>
    <input style={this.inputStyles} type="text" onChange={this.updateCategoryState}
    value={this.state.category}/>
    <p>Price:</p>
    <input style={this.inputStyles} type="text" onChange={this.updatePriceState} 
    value={this.state.price}/>
    
    <p>Quantity:</p>
    <input style={this.inputStyles} type="text" onChange={this.updateQuantityState}
    value={this.state.quantity} />
  
    <p>Product Image URL:</p>
    <input style={this.inputStyles} type="text" onChange={this.updateImageyState}
    value={this.state.imageUrl}/>
   
    </div>
      <div style={this.div2Styles}>
        <p>Product Description:</p>
        <textarea style={this.textStyles} type="text" onChange={this.updateDescriptionState} value={this.state.description}/>
        <button onClick={this.postProduct}>Add Product</button>
      </div>
    </div>

  )
  
}
 



}
export default editProduct;
