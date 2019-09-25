import React, { Component } from "react";
import API from "../utils/API";

class editProduct extends Component  {
  state= {
      name: '',
      category: '',
      price: 0,
      description: '',
      quantity:0,
      imageUrls: [],
      _id: ''
      // image1Url: '',
      // image2Url: '',
      // image3Url: ''
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
  const image1Url = this.props.location.state.imageUrls[0] ? this.props.location.state.imageUrls[0] : '';
  const image2Url = this.props.location.state.imageUrls[1] ? this.props.location.state.imageUrls[1] : '';
  const image3Url = this.props.location.state.imageUrls[2] ? this.props.location.state.imageUrls[2] : '';
  const imgUrls = 
  this.props.location.state.imageUrls.length > 0 ? this.props.location.state.imageUrls : 
  [image1Url, image2Url, image3Url];
  this.setState({
    name: this.props.location.state.name,
    category: this.props.location.state.category,
    price: this.props.location.state.price,
    description: this.props.location.state.description,
    quantity: this.props.location.state.quantity,
    imageUrls: imgUrls,
    _id: this.props.location.state._id
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
updateImage1State = event => {
  const imgArr =[...this.state.imageUrls];
  imgArr[0] = event.target.value
  this.setState({imageUrls: imgArr})
}
updateImage2State = event => {
  const imgArrCopy = [...this.state.imageUrls]
  imgArrCopy[1] = event.target.value
  this.setState({imageUrls: imgArrCopy})
}
updateImage3State = event => {
  const imgArrCopy =[...this.state.imageUrls]
  imgArrCopy[2] = event.target.value
  this.setState({imageUrls: imgArrCopy})
}
postProduct = () => {
  console.log(this.state)
  API.postEditProduct(this.state._id, this.state).then(function(dbProduct) {console.log(dbProduct)})
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
  
    <p>Product Image URL #1:</p>
    <input style={this.inputStyles} type="text" onChange={this.updateImage1State}
    value={this.state.imageUrls[0]}/>
   
    </div>
      <div style={this.div2Styles}>
      <p>Product Image URL #2:</p>
        <input style={this.inputStyles} type="text" onChange={this.updateImage2State} value={this.state.imageUrls[1]}/>
        <p>Product Image URL #3:</p>
        <input style={this.inputStyles} type="text" onChange={this.updateImage3State} value={this.state.imageUrls[2]}/>
        <p>Product Description:</p>
        <textarea style={this.textStyles} type="text" onChange={this.updateDescriptionState} value={this.state.description}/>
        <button onClick={this.postProduct}>Save Changes</button>
      </div>
    </div>

  )
  
}
 



}
export default editProduct;
