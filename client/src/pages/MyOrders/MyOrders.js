import React from 'react';
import Nav from '../../components/Nav/index';
import Footer from '../../components/Footer/Footer';
import {connect} from 'react-redux';
const MyOrders = () => {

  return(
    <div>
      <Nav/>
      My Orders
      <Footer/>
    </div>
  )
}


const mapStateToProps = state => ({
  auth: state.auth
});


export default connect(mapStateToProps)(MyOrders);
