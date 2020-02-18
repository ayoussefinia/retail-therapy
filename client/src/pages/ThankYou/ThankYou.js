import React from 'react';
import Nav from "../../components/Nav/index";
import Footer from "../../components/Footer/Footer";
import classes from "./ThankYou.module.css";

const ThankYou = () => {


  return(
    <div>
      <Nav/>
          <div className={classes.thankYouContainer}>
            <h1 className={classes.thankYouMessage}>Thank You</h1>
          </div>
      <Footer/>
    </div>
    
  )
}

export default ThankYou;