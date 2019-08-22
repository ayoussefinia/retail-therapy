import React, { Component } from "react";
import API from "../utils/API"
import {Row, Col, Container} from "../components/Grid"
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
      .then(res =>
        this.setState({ products: res.data })
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
      <Container fluid>
        <Row>
          <Col size="md-6">
           
          </Col>
          <Col size="md-6 sm-12">
           
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Products;
