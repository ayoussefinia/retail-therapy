import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import Nav from "../../components/Nav/index";
import Footer from "../../components/Footer/Footer";
import classes from "./Checkout.module.css";
import API from "../../utils/API"

const Checkout = () => {

  const [state, setState] = useState({
    cartProducts: [],
    cartId: ''
  });


  const getSum = (total, num) => {
    console.log(num)
    return total + num.item.price;
  }



  useEffect(() => {
    const cartId = localStorage.getItem('userCartId') || localStorage.getItem('guestCartId') || '';    API.getGuestCart(cartId).then(res => {
      console.log("*********MYProds********", res);
      const prods = res.data.products;
      setState(
        {
          ...state,
          cartProducts: prods
        }
      )
    })
  }, []);


  return(
    <div >
      <Nav/>
      <div className={classes.checkoutContainer}>
      <h4 className={classes.orderSummaryHeader}>Order Summary</h4>
      <div className={classes.orderSummary}>
     
      <table className={classes.table}>
          <tr className={classes.row}>
              <th className={classes.cell}>Item</th>
              <th className={classes.cell}>quantity</th>
              <th className={classes.cell}>price</th>
          </tr>
          {
            state.cartProducts.map(product => {
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
              {state.cartProducts.reduce(getSum, 0)}
              </td>
          </tr>
      </table>
      </div>
      <div className={classes.checkoutFormDiv}>
      <h4 className={classes.orderSummaryHeader}>Dummy Personal Info: </h4>
      
          <form action="" className={classes.checkoutForm}>
          <tr className={classes.formRow}>
              <td>First Name:</td>
              <td>Last Name:</td>
              <td></td>
          </tr>
          <tr className={classes.formRow}>
            <td><input type="text" className={classes.name}/></td>
            <td><input type="text" className={classes.name}/></td>
            <td></td>
          </tr>
          <tr className={classes.formRow}>
              <td>e-mail:</td>
              <td>phone:</td>
              <td></td>
          </tr>
          <tr className={classes.formRow}>
            <td><input type="text" className={classes.name}/></td>
            <td><input type="text" className={classes.name}/></td>
            <td></td>
          </tr>
          <h4 className={classes.orderHeader}>Shipping Address: </h4>
          <table className={classes.formTable}>
          
          <tr className={classes.formRow}>
              <td className={classes.formCell}>address line 1:</td>
              <td className={classes.formCell}>city:</td>
              <td className={classes.formCell}>state:</td>
          </tr>
          <tr className={classes.formRow}>
            <td><input type="text" className={classes.name}/></td>
            <td><input type="text" className={classes.name}/></td>
            <td><input type="text" className={classes.name}/></td>
          </tr>
          <tr className={classes.formRow}>
              <td className={classes.formCell}>address line 2:</td>
              <td className={classes.formCell}>zip:</td>
              <td className={classes.formCell}></td>
          </tr>
          <tr className={classes.formRow}>
            <td className={classes.formCell}><input type="text" className={classes.name}/></td>
            <td className={classes.formCell}><input type="text" className={classes.name}/></td>
            <td className={classes.formCell}></td>
        
          </tr>
          <h4 className={classes.orderHeader}>Billing Address: </h4>
          <tr className={classes.cardRow}>
            <td ><strong>Same as shipping</strong></td>
            <td><input type="checkbox"/></td>
          </tr>
          
          <tr className={classes.formRow}>
              <td className={classes.formCell}>address line 1:</td>
              <td className={classes.formCell}>city:</td>
              <td className={classes.formCell}>state:</td>
          </tr>
          <tr className={classes.formRow}>
            <td><input type="text" className={classes.name}/></td>
            <td><input type="text" className={classes.name}/></td>
            <td><input type="text" className={classes.name}/></td>
          </tr>
          <tr className={classes.formRow}>
              <td className={classes.formCell}>address line 2:</td>
              <td className={classes.formCell}>zip:</td>
              <td className={classes.formCell}></td>
          </tr>
          <tr className={classes.formRow}>
            <td className={classes.formCell}><input type="text" className={classes.name}/></td>
            <td className={classes.formCell}><input type="text" className={classes.name}/></td>
            <td className={classes.formCell}></td>
        
          </tr>
          <h4 className={classes.orderSummaryHeader}>Dummy Card Data: </h4>
          <tr className={classes.formRow}>
              <td className={classes.formCell}></td>
              <td className={classes.formCell}>Name On Card:</td>
              <td className={classes.formCell}></td>
              <td className={classes.formCell}></td>
           
          </tr>
          <tr className={classes.formRow}>
              <td className={classes.formCell}>First:</td>
              <td className={classes.formCell}>Last:</td>
              <td className={classes.formCell}></td>
          </tr>
          <tr className={classes.formRow}>
              <td className={classes.formCell}><input type="text" className={classes.name}/></td>
              <td className={classes.formCell}><input type="text" className={classes.name}/></td>
              <td className={classes.formCell}></td>
          </tr>
          
          <tr className={classes.formRow}>
              <td className={classes.formCell}>Card Number:</td>
              <td className={classes.formCell}></td>
              <td className={classes.formCell}></td>
          </tr>
          <tr className={classes.cardRow}>
              <td><input type="text" className={classes.card}/></td>
              <td className={classes.dash}>-</td>
              <td><input type="text" className={classes.card}/></td>
              <td className={classes.dash}>-</td>
              <td><input type="text" className={classes.card}/></td>
              <td className={classes.dash}>-</td>
              <td><input type="text" className={classes.card}/></td>
          </tr>
         
          <tr className={classes.cardRow}>
              <td>Security</td>
              <td className={classes.dash}></td>
              <td className={classes.dash}></td>  
              <td className={classes.dash}></td>
              <td ></td>
              <td></td>
              <td className={classes.dash}>Expiration</td>
          </tr>
          <tr className={classes.cardRow}>
              <td><input type="text" className={classes.card}/></td>
              <td className={classes.dash}></td>
              <td></td>
              <td className={classes.dash}></td>
              <td><input type="text" className={classes.card}/></td>
              <td className={classes.dash}>/</td>
              <td><input type="text" className={classes.card}/></td>
          </tr>
         <tr className={classes.buttonRow}>
           <td>
             <button className={classes.orderButton}>Purchase</button>
           </td>
         </tr>
          </table>
          </form>
        <div className={classes.purchaseImages}>
        {state.cartProducts.map(product => {
              return(
              <img 
                src={product.item.imageUrls[0]} 
                className={classes.image}
                alt=""/>

              )
            })}
        </div>
      </div>
      </div>
     
      <Footer/>
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Checkout);