import React, { Component} from "react";

import { Redirect } from 'react-router-dom';
import API from "../utils/API";
import {Row, Col, Container} from "../components/Grid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faEdit, faTrash, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import '../components/Nav/style.css';
import DeleteModal from '../components/modals/DeleteModal.js';
import DeleteCard from '../components/Cards/DeleteCard.js';
class Products extends Component {
  state = {
    products: [],
    editClicked: false,
    properties: {},
    deleteClicked: false,
    deleteIndex: 0,
    viewProductClicked: false
  };

  divStyles = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem'
  }
  descStyles = {
    height: '50%',
    width: '100%'
  }

  cardStyles = {
    width: "18rem",
    margin: '0 2rem'
  }

  iconDiv = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '1rem',
    alignItems: 'flex-end'
  }
  productSection = {
    margin: '0 2rem'
  }
  cardButton = {
    width: '50%',
    height: '2rem',
    borderRadius: '5px',
    margin: '.5rem',
    fontSize: '1.25rem',
    fontWeight: '600',
    background: 'white',
    border: '1px solid black'
  }
  cardButtonDiv = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }
  productStats = {
    padding: '1rem'
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



editProduct = (event) => {
  let id = ''
  if (event.target.getAttribute('data-id')) {
    id = event.target.getAttribute('data-id')
  } else {
    id = event.target.parentElement.getAttribute('data-id');
  }
  API.getProduct(id).then((res) => { 
    this.setState({
      editClicked: true,
      properties: res.data
    })
    console.log(res.data) });
}

deleteProductModalShow = (event) => {
  event.preventDefault();
  let id = ''
  if (event.target.getAttribute('data-id')) {
    id = event.target.getAttribute('data-id')
  } else {
    id = event.target.parentElement.getAttribute('data-id');
  }

  let index;
  if (event.target.getAttribute('data-number')) {
    index = event.target.getAttribute('data-number')
  } else {
    index = event.target.parentElement.getAttribute('data-number');
  }


  this.setState({deleteClicked:true, deleteIndex: index});
}

cancelDelete = (event) => {
  this.setState({deleteClicked: false});
}

confirmDelete = (event) => {
  console.log('confirm delete clicked');
  console.log(this.state.products[this.state.deleteIndex]._id);
  let id = this.state.products[this.state.deleteIndex]._id;
  API.deleteProduct(id).then(response => {
      console.log(response);
      this.setState({deleteClicked: false, deleteIndex: 0})
      this.loadProducts();
    });
 
}


nextImage = (event) => {
  let rightArrow;
  if(event.target.tagName === 'path') {
    rightArrow = event.target.parentElement;
  } else {
    rightArrow = event.target
  }

  let cardNum = rightArrow.getAttribute('data-index');


const prodsCopy = [...this.state.products];
let imageArr = prodsCopy[cardNum].imageUrls;
let currentImage = rightArrow.previousSibling.getAttribute('src');
let index = imageArr.indexOf(currentImage);

  if (index < imageArr.length-1) {
    index ++
    rightArrow.previousSibling.setAttribute('src', imageArr[index]);
  } else {
    rightArrow.previousSibling.setAttribute('src', imageArr[0]);
  }
}
previousImage = (event) => {
  let leftArrow;
  if(event.target.tagName === 'path') {
    leftArrow = event.target.parentElement;
  } else {
    leftArrow = event.target
  }

  let cardNum = leftArrow.getAttribute('data-index');


const prodsCopy = [...this.state.products];
let imageArr = prodsCopy[cardNum].imageUrls;
let currentImage = leftArrow.nextSibling.getAttribute('src');
let index = imageArr.indexOf(currentImage);


  if (index > 0) {
    index --;
    leftArrow.nextSibling.setAttribute('src', imageArr[index]);
  } else {
    index = imageArr.length -1;
    leftArrow.nextSibling.setAttribute('src', imageArr[index]);
  }
}

viewProduct = (event) => {
  console.log(event.target.getAttribute('data-id'));
  console.log('view product called')
  let id = event.target.getAttribute('data-id');
  API.getProduct(id).then((res) => { 
    this.setState({
      viewProductClicked: true,
      properties: res.data
    })
    console.log(res.data) });
}
// ShowButton = (event) => {
//   // console.log(event.target);
//   let div;
//   if(event.target.tagName === 'DIV' && event.target.classList.contains('product-card')) {
//     div = event.target
//   } else if (event.target.parentElement.tagName === 'DIV' && event.target.parentElement.classList.contains('product-card')) {
//     div = event.target.parentElement;
//   } else if (event.target.parentElement.parentElement.tagName === 'DIV' &&     event.target.parentElement.parentElement.classList.contains('product-card')){
//     div = event.target.parentElement.parentElement;
//   } else if (event.target.parentElement.parentElement.parentElement.tagName === 'DIV' &&     event.target.parentElement.parentElement.parentElement.classList.contains('product-card')) {
//     div = event.target.parentElement.parentElement.parentElement;
//   }
//   console.log(div.getAttribute('data-index'))
//   let id = div.getAttribute('data-index');

// }

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // }; ==



  render() {
    return (
      this.state.editClicked ? 
        <Redirect to={{
          pathname: '/editProduct',
          state: this.state.properties
        }}/> :  this.state.viewProductClicked ? 
   
        <Redirect to={{
          pathname: '/product/'+this.state.properties._id,
          state: this.state.properties
        }}/> :

      <div className="row" style={this.productSection}> 
            {this.state.deleteClicked?  <DeleteModal cancel={this.cancelDelete} confirm={this.confirmDelete} product={this.state.products[this.state.deleteIndex]} >
      
              <DeleteCard product={this.state.products[this.state.deleteIndex]} />

            </DeleteModal> : ''}
        {this.state.products.map((product, index) => {
          
          return (
          <div style={this.divStyles} >
         
              <div className="card text-white bg-dark product-card" style={this.cardStyles}  data-index={index}>
              <div className='pictureDiv'>
                <FontAwesomeIcon icon={faAngleLeft} size="2x" onClick={this.previousImage} data-id={product._id} data-index={index}className='icon angleLeft'/>
                <img className="card-img-top" src={product.imageUrls[0]} alt="Card image cap"/>
                <FontAwesomeIcon icon={faAngleRight} size="2x"  data-id={product._id}  data-index={index} className='icon angleRight' onClick={this.nextImage} /> 
              </div>

                <div style={this.productStats}>
                  <h5 className="card-title">{product.name}</h5>
                  <div style={this.descStyles}>
                  <p className="card-text">Category: {product.category}</p>
                  <p className="card-text">Price: {product.price}</p>

                  </div>
                </div>
                <div style={this.cardButtonDiv}>
                    <button style={this.cardButton} data-ref={index} data-id={product._id} onClick={this.viewProduct}>View More</button>
                </div>

                <div style={this.iconDiv}>
                  {/* <FontAwesomeIcon icon={faCartPlus} size="2x"  data-id={product._id} className='icon' /> */}
                  <FontAwesomeIcon icon={faEdit} size="2x" data-id={product._id} data-number={index} className='icon' onClick={this.editProduct}/>
                  <FontAwesomeIcon icon={faTrash} size="2x" data-id={product._id} className='icon' onClick={this.deleteProductModalShow} data-number={index}/>
                  {/* <a href="#" className="card-link">Another link</a> */}
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
