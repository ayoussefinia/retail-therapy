import axios from "axios";

export default {
  // Gets all books
  getProducts: function() {
    return axios.get("/api/products");
  },
  postProduct: function(productData) {
    return axios.post("/api/products", productData)
  },
  getProduct: function(id) {
    console.log(id)
    return axios.get("/api/products/"+id)
  },
  postEditProduct: function(id, productData) {
    console.log(id)
    return axios.post("/api/products/"+id, productData)
  },
  deleteProduct: function(id) {
    return axios.delete("/api/products/"+id);
  },
  createGuestCart: function(productData) {
    return axios.post('/api/cart', productData);
  },
  postEditGuestCart: function(id, productData) {
    return axios.post('/api/cart/'+id, productData) 
  }, getGuestCart: function(id) {
    return axios.get('/api/cart/'+id);
  },
  searchProducts: function(searchString) {
    return axios.get('api/products/name/'+ searchString);
  },
  searchProductsByCategory: function(searchString) {
    return axios.get('api/products/category/'+searchString);
  }

  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
