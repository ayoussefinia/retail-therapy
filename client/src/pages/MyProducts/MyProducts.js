import React, {useState, useEffect} from "react";
import { Redirect } from 'react-router-dom';
import Nav from "../../components/Nav/index";
import Footer from "../../components/Footer/Footer";
import {connect} from "react-redux";
import API from "../../utils/API";
import classes from "./MyProducts.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import DeleteModal from '../../components/modals/DeleteModal';
import DeleteCard from '../../components/Cards/DeleteCard';
const MyProducts = (props) => {


useEffect(() => {
  API.getUserProducts(props.auth.user.id).then(res => {
    console.log("*********MYProds********", res);
    const prods = [];
    
    if(res.data.length > 0) {
      // prods.push(res.data[0])
      setState({products: res.data})
    }
    else {
      setState({products: []})
    }
  })
}, []);

const editProduct = (event) => {
  let id = ''
  if (event.target.getAttribute('data-id')) {
    id = event.target.getAttribute('data-id')
  } else {
    id = event.target.parentElement.getAttribute('data-id');
  }

  console.log(id)
  API.getProduct(id).then((res) => { 

    setState({
      editClicked: true,
      properties: res.data
    })
  });
}

const deleteProductModalShow = (event) => {
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

  let products = [...state.products]
  setState({deleteClicked: true, deleteIndex: index, products:  products});
}

const cancelDelete = (event) => {
  setState({deleteClicked: false});
}

const  loadProducts = () => {
  API.getUserProducts(props.auth.user.id)
      .then(res => {
        
        setState({ products: res.data, editClicked: false, properties: {}, deleteClicked: false,  deleteIndex: 0 })
      }
    )
    .catch(err => console.log(err));
};
const confirmDelete = (event) => {
  let id = state.products[state.deleteIndex]._id;
  API.deleteProduct(id).then(response => {
    
    let products = [...state.products]
      setState({deleteClicked: false, deleteIndex: 0, products: products})
      loadProducts();
    });
}


const [state, setState] = useState({
  products: [],
  editClicked: false,
  properties: {},
  deleteClicked: false,
  deleteIndex: 0
})

  return (
    state.editClicked ? 
        <Redirect to={{
          pathname: '/editProduct/'+state.properties._id,
          state: state.properties
        }}/> : 
    <div>
      
    <Nav/>

    {state.deleteClicked?  <DeleteModal cancel={cancelDelete} confirm={confirmDelete} product={state.products[state.deleteIndex]} >
      <DeleteCard product={state.products[state.deleteIndex]} />
    </DeleteModal> : null}

    <div className={classes.productsContainer}>
      { state.products.length > 0 ? state.products.map((prod,index) => {
          return( 
            
            <div className={classes.productCard}>
            <div className={classes.cardImageDiv}>
              <div className={classes.imageBanner}>
              <div className={classes.bannerBackground}></div>
              <div className={classes.bannerText}>
              {prod.name}
              </div>
              </div>
              <img src={String(prod.imageUrls)} className={classes.cardImage} alt=""/>
            </div>
            <div className={classes.cardBottom}>
                <FontAwesomeIcon 
                  icon={faEdit} 
                  size="2x" 
                  data-id={prod._id} 
                  data-number={index} 
                  onClick = {editProduct}
                  className={classes.editIcon} />
                <FontAwesomeIcon 
                  onClick = {deleteProductModalShow}
                  icon={faTrash} 
                  size="2x" 
                  data-id={prod._id} 
                  className='icon'  
                  data-number={index} 
                  className={classes.deleteIcon}/>
            </div>
              
            </div>
          
          )
        }) : 'you have no products' }
    </div>
    <Footer/>
    </div>
  )
}


const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(MyProducts);