import React, {useState, useEffect} from 'react';
import Nav from '../../components/Nav/index';
import Footer from '../../components/Footer/Footer';
import {connect} from 'react-redux';
import API from "../../utils/API";
import classes from "./MyOrders.module.css";

const MyOrders = (props) => {

const [state, setState] = useState({
  orders:[]
});


useEffect(()=>{
  API.getOrders(props.auth.user.id).then(res => {
    console.log(res.data)
    setState({orders: res.data})
  })
},[])

const getSum = (total, num) => {
  console.log(num)
  return total + num.item.price;
}

  return(
    <div>
      <Nav/>
        <div className={classes.myOrdersContainer}>
            {
              state.orders.length > 0 ?
              state.orders.map((order, index) => {
                return(
                  <div>
                      <h2>Order Date:  {order.date}</h2>
                  <table className={classes.table}>
                      <tr className={classes.row}>
                          <th className={classes.cell}>Items</th>
                          <th className={classes.cell}>quantity</th>
                          <th className={classes.cell}>price</th>
                      </tr>
                      {
                        order.products.map(product => {
                          return(
                          <tr className={classes.row}>
                              <td className={classes.cell} >{product.item.name}</td>
                              <td className={classes.cell} >{product.quantity}</td>
                              <td className={classes.cell} >{product.item.price}</td>
                          </tr>
                            
                          )
                        })
                      }
                      <tr className={classes.row}>
                          <td className={classes.cell}></td>
                          <td className={classes.cell}>
                          <strong>
                            Total:
                          </strong>
                          </td>
                          <td className={classes.cell}>
                          {order.products.reduce(getSum, 0)}
                          </td>
                      </tr>
                  </table>
                  </div>
                )
              })
              : 'You Have No Orders Yet' 
            }
        </div>
      <Footer/>
    </div>
  )
}


const mapStateToProps = state => ({
  auth: state.auth
});


export default connect(mapStateToProps)(MyOrders);
