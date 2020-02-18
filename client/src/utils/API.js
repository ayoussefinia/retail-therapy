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
    return axios.get("/api/products/"+id)
  },
  getUserProducts: function(id) {
    return axios.get("/api/products/userId/"+id)
  },
  postEditProduct: function(id, productData) {

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
  }, 
  getGuestCart: function(id) {
    return axios.get('/api/cart/'+id);
  },
  searchProducts: function(searchString) {
    return axios.get('api/products/name/'+ searchString);
  },
  searchProductsByCategory: function(searchString) {
    return axios.get('api/products/category/'+searchString);
  },
  postOrder: function(orderData) {
    return axios.post('api/order', orderData)
  },
  getOrders: function(userId) {
    return axios.get('api/order/'+ userId)
  } 
};
