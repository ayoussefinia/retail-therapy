import React, { Component } from "react";
import API from "../utils/API";
import {Row, Col, Container} from "../components/Grid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
class Products extends Component {
  state = {
    products: []
    // title: "",
    // author: "",
    // synopsis: ""
  };

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
   
      <div className="row">
        {this.state.products.map(product => {
          
          return (
          <div className="col-lg-3" style={{margin: "3rem"}}> 
          <div className="card text-white bg-dark" style={{width: "18rem"}}>
            <img className="card-img-top" src={product.imageUrl} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
            </div>
            {/* <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>

              <li className="list-group-item">Vestibulum at eros</li>
            </ul> */}
            <div className="card-body">
              <FontAwesomeIcon icon={faCartPlus} size="2x"/>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>
          </div> 
        )

        })}
      </div>

      // <Container fluid>
      //   <Row>
      //     <Col size="md-6">
           
      //     </Col>
      //     <Col size="md-6 sm-12">
           
      //     </Col>
      //   </Row>
      // </Container>
    );
  }
}

export default Products;
