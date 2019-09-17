import React, { Component} from "react";

import { Redirect } from 'react-router-dom';
import API from "../utils/API";
import {Row, Col, Container} from "../components/Grid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../components/Nav/style.css';
class Products extends Component {
  state = {
    products: [],
    editClicked: false,
    properties: {}
    // title: "",
    // author: "",
    // synopsis: ""
  };

  divStyles = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem'
  }
  descStyles = {
    height: '50%',
    width: '100%',
    // overflowY: 'scroll'
  }

  cardStyles = {
    width: "18rem",
    height: '45vh'
  }

  iconDiv = {
    display: 'flex',
    justifyContent: 'space-around'
  }

  
  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    API.getProducts()
        .then(res => {
          console.log(res.data)
          this.setState({ products: res.data })
        }
      )
      .catch(err => console.log(err));
  };

// getProduct = (id) => {
//   API.getProduct(id).then(function (res) { console.log(res) });
// }

// getId = (event)  => {
//   console.log('inside get id')
//   console.log(event.target.getAttribute('data-id'));

//   return id;
// }

editProduct = (event) => {
  
 
  let id = ''
  if (event.target.getAttribute('data-id')) {
    id = event.target.getAttribute('data-id')
  } else {
    id = event.target.parentElement.getAttribute('data-id');
  }

  API.getProduct(id).then((res) => { 
    
    // <Redirect to={{
    //   pathname: '/editProduct',
    //   state: res.data
    //   }}
    // />
    this.setState({
      editClicked: true,
      properties: res.data
    })
    console.log(res.data) });
    // window.location.href = '/editProduct'

    // return <Redirect to='/addProduct'/>
}

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      this.state.editClicked ? 
        <Redirect to={{
          pathname: '/editProduct',
          state: this.state.properties
        }}/> : 
   
      <div className="row">
        {this.state.products.map(product => {
          
          return (
          <div style={this.divStyles}>
              <div className="col-lg-2"> 
              <div className="card text-white bg-dark" style={this.cardStyles}>
                <img className="card-img-top" src={product.imageUrl} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <div style={this.descStyles}>
                  <p className="card-text">Category: {product.category}</p>
                  <p className="card-text">Price: {product.price}</p>

                  </div>
                </div>
                {/* <ul className="list-group list-group-flush">
                  <li className="list-group-item">Cras justo odio</li>

                  <li className="list-group-item">Vestibulum at eros</li>
                </ul> */}
                <div className="card-body" style={this.iconDiv}>
                  <FontAwesomeIcon icon={faCartPlus} size="2x"  data-id={product._id} className='icon'/>
                  <FontAwesomeIcon icon={faEdit} size="2x" data-id={product._id} className='icon' onClick={this.editProduct}/>
                  <FontAwesomeIcon icon={faTrash} size="2x" data-id={product._id} className='icon'/>
                  {/* <a href="#" className="card-link">Another link</a> */}
                </div>
              </div>
              </div> 
          </div>
        
        )

        })}
      </div>
      

    );
  }
}

export default Products;
