import React, {Component} from "react";
import {connect} from "react-redux";
import Nav from "../../components/Nav/index";
import Footer from "../../components/Footer/Footer";
import classes from "./Checkout.module.css";
import API from "../../utils/API"

class Checkout extends Component {

  state = {
    orderForm: {
        firstName: {
          elementType: 'input',
          elementConfig: {
              type: 'text',
              placeholder: 'first name'
          },
          value: '',
          validation: {
              required: true
          },
          valid: false,
          touched: false
        },
        cardFirstName: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'first name'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
          },
        lastName: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Name'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        cardLastName: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Name'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        shippingAddressOne: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Street'
            },
            value: '',
            validation: {
                required: true,
                minLength: 5
            },
            valid: false,
            touched: false
        },
        billingAddressOne: {
          elementType: 'input',
          elementConfig: {
              type: 'text',
              placeholder: 'Street'
          },
          value: '',
          validation: {
              required: true,
              minLength: 5
          },
          valid: false,
          touched: false
      },
      billingAddressTwo: {
        elementType: 'input',
        elementConfig: {
            type: 'text'
        },
        value: '',
        validation: {
            required: false
        },
        valid: true,
        touched: false
    },
    shippingAddressTwo: {
        elementType: 'input',
        elementConfig: {
            type: 'text'
        },
        value: '',
        validation: {
            required: false
        },
        valid: true,
        touched: false
    },
      shippingState: {
        elementType: 'input',
        elementConfig: {
            type: 'text'
        },
        value: '',
        validation: {
            required: true,
            isState: true,
            minLength: 2
        },
        valid: false,
        touched: false
    },
    billingState: {
      elementType: 'input',
      elementConfig: {
          type: 'text'
      },
      value: '',
      validation: {
          required: true,
          isState: true,
          minLength: 2
      },
      valid: false,
      touched: false
      },
      shippingCity: {
        elementType: 'input',
        elementConfig: {
            type: 'text'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
      },
      billingCity: {
        elementType: 'input',
        elementConfig: {
            type: 'text'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
       },
        zipCode: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'ZIP Code'
            },
            value: '',
            validation: {
                required: true,
                minLength: 5,
                maxLength: 5,
                isNumeric: true
            },
            valid: false,
            touched: false
        },
        firstFour: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true,
                minLength: 4,
                maxLength: 4,
                isNumeric: true
            },
            valid: false,
            touched: false
        },
        secondFour: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true,
                minLength: 4,
                maxLength: 4,
                isNumeric: true
            },
            valid: false,
            touched: false
        },
        thirdFour: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true,
                minLength: 4,
                maxLength: 4,
                isNumeric: true
            },
            valid: false,
            touched: false
        },
        fourthFour: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true,
                minLength: 4,
                maxLength: 4,
                isNumeric: true
            },
            valid: false,
            touched: false
        },
        security: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true,
                minLength: 3,
                maxLength: 3,
                isNumeric: true
            },
            valid: false,
            touched: false
        },
        expOne: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true,
                minLength: 2,
                maxLength: 2,
                isNumeric: true
            },
            valid: false,
            touched: false
        },
        expTwo: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true,
                minLength: 2,
                maxLength: 2,
                isNumeric: true
            },
            valid: false,
            touched: false
        },
        billingZipCode: {
          elementType: 'input',
          elementConfig: {
              type: 'text',
              placeholder: 'ZIP Code'
          },
          value: '',
          validation: {
              required: true,
              minLength: 5,
              maxLength: 5,
              isNumeric: true
          },
          valid: false,
          touched: false
       },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Your E-Mail'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        phone: {
          elementType: 'input',
          elementConfig: {
              type: 'phone'
          },
          value: '',
          validation: {
              required: true,
              isPhone: true
          },
          valid: false,
          touched: false
      }
    },
    formIsValid: false,
    cartProducts: [],
    buttonClicked: false,
    checkboxChecked: false
}

checkboxChecked() {

    let orderFormCopy = {...this.state.orderForm}
    orderFormCopy['billingAddressOne'].valid = true
    orderFormCopy['billingCity'].valid = true
    orderFormCopy['billingState'].valid = true
    orderFormCopy['billingZipCode'].valid = true

    this.setState({
            ...this.state,
            checkboxChecked: !this.state.checkboxChecked,
            orderForm: orderFormCopy} )
}

buttonClicked(event) {
    event.preventDefault();
    
    if(!this.state.formIsValid) {
        this.setState({
            ...this.state,
            buttonClicked: true
        })
    }
}

checkValidity(value, rules) {
  let isValid = true;
  if (!rules) {
      return true;
  }
  
  if (rules.required) {
      isValid = value.trim() !== '' && isValid;
  }

  if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid
  }

  if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid
  }

  if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid
  }

  if (rules.isPhone) {
     const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
     isValid = pattern.test(value) && isValid
  }

  if (rules.isState) {
    const pattern = /^(?:Ala(?:(?:bam|sk)a)|American Samoa|Arizona|Arkansas|(?:^(?!Baja )California)|Colorado|Connecticut|Delaware|District of Columbia|Florida|Georgia|Guam|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Miss(?:(?:issipp|our)i)|Montana|Nebraska|Nevada|New (?:Hampshire|Jersey|Mexico|York)|North (?:(?:Carolin|Dakot)a)|Ohio|Oklahoma|Oregon|Pennsylvania|Puerto Rico|Rhode Island|South (?:(?:Carolin|Dakot)a)|Tennessee|Texas|Utah|Vermont|Virgin(?:ia| Island(s?))|Washington|West Virginia|Wisconsin|Wyoming|A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$/;
    isValid = pattern.test(value) && isValid
  }

  if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid
  }

  return isValid;
}

inputChangedHandler = (event, inputIdentifier) => {
  const updatedOrderForm = {
      ...this.state.orderForm
  };
  const updatedFormElement = { 
      ...updatedOrderForm[inputIdentifier]
  };
  updatedFormElement.value = event.target.value;
  updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
  updatedFormElement.touched = true;
  updatedOrderForm[inputIdentifier] = updatedFormElement;
  
  let formIsValid = true;
  for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
  }
  this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
}

postOrder() {
    const orderObj = {};
    if(this.props.auth.user.id) {
        orderObj.userId = this.props.auth.user.id;
        orderObj.products = this.state.cartProducts;
        console.log('*****Order Obj********', orderObj)
        API.postOrder(orderObj).then(res => {
            const cartId = localStorage.getItem('guestCartId')
            const postObj = {products:[]}
            API.postEditGuestCart(cartId, postObj).then(res => {
                this.props.history.push("/thankYou");
            }).catch(err => console.log(err))
        }).catch(err => console.log(err));
    } else {
        const cartId = localStorage.getItem('guestCartId')
        const postObj = {products:[]}
        API.postEditGuestCart(cartId, postObj).then(res => {
            this.props.history.push("/thankYou");
        }).catch(err => console.log(err))
    }
}


  getSum = (total, num) => {
    console.log(num)
    return total + num.item.price;
  }

  componentDidMount() {
    const cartId = localStorage.getItem('userCartId') || localStorage.getItem('guestCartId') || '';    API.getGuestCart(cartId).then(res => {
      console.log("*********MYProds********", res);
      const prods = res.data.products;
      this.setState(
        {
          ...this.state,
          cartProducts: prods
        }
      )
    })
  }


  render() {
    return(
      <div >
        <Nav/>
        <div className={classes.checkoutContainer}>
        <h4 className={classes.orderSummaryHeader}>Order Summary</h4>
        <div className={classes.orderSummary}>
       
        <table className={classes.table}>
            <tr className={classes.row}>
                <th className={classes.cell}>Items</th>
                <th className={classes.cell}>quantity</th>
                <th className={classes.cell}>price</th>
            </tr>
            {
              this.state.cartProducts.map(product => {
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
                {this.state.cartProducts.reduce(this.getSum, 0)}
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
              <td>
                  <input 
                      className={!this.state.orderForm.firstName.valid 
                                 && this.state.orderForm.firstName.touched
                                 ?  classes.invalid : classes.valid }
                      value={this.state.orderForm.firstName.value}
                      onChange={(event) => this.inputChangedHandler(event, 'firstName')}
                    />
              </td>
              <td>
                  <input 
                      className={!this.state.orderForm.lastName.valid 
                                 && this.state.orderForm.lastName.touched
                                 ?  classes.invalid : classes.valid }
                      value={this.state.orderForm.lastName.value}
                      onChange={(event) => this.inputChangedHandler(event, 'lastName')}
                  />
              </td>
              <td></td>
            </tr>
            <tr className={classes.formRow}>
                <td>e-mail:</td>
                <td>phone:</td>
                <td></td>
            </tr>
            <tr className={classes.formRow}>
                <td>
                    <input 
                        className={!this.state.orderForm.email.valid 
                          && this.state.orderForm.email.touched
                          ?  classes.invalid : classes.valid }
                        value={this.state.orderForm.email.value}
                        onChange={(event) => this.inputChangedHandler(event, 'email')}
                    />

                </td>
                <td>
                    <input 
                        className={!this.state.orderForm.phone.valid 
                          && this.state.orderForm.phone.touched
                          ?  classes.invalid : classes.valid }
                        value={this.state.orderForm.phone.value}
                        onChange={(event) => this.inputChangedHandler(event, 'phone')}
                    />
                </td>
                <td></td>
            </tr>
            <h4 className={classes.orderHeader}>Shipping Address: </h4>
            <table className={classes.formTable}>
            
            <tr className={classes.formRow}>
                <td className={classes.formCell}>address line 1:</td>
                <td className={classes.formCell}>city:</td>
                <td className={classes.formCell}>state (e.g. TX or NY):</td>
            </tr>
            <tr className={classes.formRow}>
                <td>
                    <input 
                        className={!this.state.orderForm.shippingAddressOne.valid 
                          && this.state.orderForm.shippingAddressOne.touched
                          ?  classes.invalid : classes.valid }
                        value={this.state.orderForm.shippingAddressOne.value}
                        onChange={(event) => this.inputChangedHandler(event, 'shippingAddressOne')}
                    />
                </td>
                <td>
                    <input  
                        className={!this.state.orderForm.shippingCity.valid 
                          && this.state.orderForm.shippingCity.touched
                          ?  classes.invalid : classes.valid }
                        value={this.state.orderForm.shippingCity.value}
                        touched={this.state.orderForm.shippingCity.touched}
                        onChange={(event) => this.inputChangedHandler(event, 'shippingCity')}
                    />
                </td>
                <td> 
                    <input 
                        className={!this.state.orderForm.shippingState.valid 
                          && this.state.orderForm.shippingState.touched
                          ?  classes.invalid : classes.valid }
                        value={this.state.orderForm.shippingState.value}
                        onChange={(event) => this.inputChangedHandler(event, 'shippingState')}
                    />
                </td>
            </tr>
            <tr className={classes.formRow}>
                <td className={classes.formCell}>address line 2:</td>
                <td className={classes.formCell}>zip:</td>
                <td className={classes.formCell}></td>
            </tr>
            <tr className={classes.formRow}>
                <td className={classes.formCell}>
                      <input 
                          className={!this.state.orderForm.shippingAddressTwo.valid 
                            && this.state.orderForm.shippingAddressTwo.touched
                            ?  classes.invalid : classes.valid }
                          value={this.state.orderForm.shippingAddressTwo.value}
                          onChange={(event) => this.inputChangedHandler(event, 'shippingAddressTwo')}
                      />
                </td>
                <td className={classes.formCell}>
                    <input 
                        className={!this.state.orderForm.zipCode.valid 
                          && this.state.orderForm.zipCode.touched
                          ?  classes.invalid : classes.valid }
                        value={this.state.orderForm.zipCode.value}
                        onChange={(event) => this.inputChangedHandler(event, 'zipCode')}
                    />
                </td>
                <td className={classes.formCell}></td>
          
            </tr>
            <h4 className={classes.orderHeader}>Billing Address: </h4>
            <tr className={classes.cardRow}>
              <td ><strong>Same as shipping</strong></td>
              <td><input 
                    type="checkbox"
                    onChange={() => this.checkboxChecked()}
              /></td>
            </tr>
            
            <tr className={classes.formRow}>
                <td className={classes.formCell}>address line 1:</td>
                <td className={classes.formCell}>city:</td>
                <td className={classes.formCell}>statestate (e.g. TX or NY):</td>
            </tr>
            <tr className={classes.formRow}>
                <td>
                    <input 
                        className={!this.state.orderForm.billingAddressOne.valid 
                          && this.state.orderForm.billingAddressOne.touched
                          ?  classes.invalid : classes.valid }
                        value={this.state.checkboxChecked ? this.state.orderForm.shippingAddressOne.value : this.state.orderForm.billingAddressOne.value}
                        onChange={(event) => this.inputChangedHandler(event, 'billingAddressOne')}
                    />
                </td>
                <td>
                    <input
                        className={!this.state.orderForm.billingCity.valid 
                          && this.state.orderForm.billingCity.touched
                          ?  classes.invalid : classes.valid }
                        value={this.state.checkboxChecked? this.state.orderForm.shippingCity.value : this.state.orderForm.billingCity.value}
                        onChange={(event) => this.inputChangedHandler(event, 'billingCity')}
                    />
                </td>
                <td>
                    <input 
                        className={!this.state.orderForm.billingState.valid 
                          && this.state.orderForm.billingState.touched
                          ?  classes.invalid : classes.valid }
                        value={this.state.checkboxChecked? this.state.orderForm.shippingState.value : this.state.orderForm.billingState.value}
                        onChange={(event) => this.inputChangedHandler(event, 'billingState')}
                    />
                </td>
            </tr>
            <tr className={classes.formRow}>
                <td className={classes.formCell}>address line 2:</td>
                <td className={classes.formCell}>zip:</td>
                <td className={classes.formCell}></td>
            </tr>
            <tr className={classes.formRow}>
                <td className={classes.formCell}>
                     <input 
                        className={!this.state.orderForm.billingAddressTwo.valid 
                            && this.state.orderForm.billingAddressTwo.touched
                            ?  classes.invalid : classes.valid }
                        value={this.state.checkboxChecked? this.state.orderForm.shippingAddressTwo.value : this.state.orderForm.billingAddressTwo.value}
                        onChange={(event) => this.inputChangedHandler(event, 'billingAddressTwo')}
                      />
                </td>
                <td className={classes.formCell}>
                    <input 
                        className={!this.state.orderForm.billingZipCode.valid 
                          && this.state.orderForm.billingZipCode.touched
                          ?  classes.invalid : classes.valid }
                        value={this.state.checkboxChecked? this.state.orderForm.zipCode.value : this.state.orderForm.billingZipCode.value}
                        onChange={(event) => this.inputChangedHandler(event, 'billingZipCode')}
                    />
                </td>
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
                <td className={classes.formCell}>
                     <input 
                        className={!this.state.orderForm.cardFirstName.valid 
                            && this.state.orderForm.cardFirstName.touched
                            ?  classes.invalid : classes.valid }
                        value={this.state.orderForm.cardFirstName.value}
                        onChange={(event) => this.inputChangedHandler(event, 'cardFirstName')}
                      />
                </td>
                <td className={classes.formCell}>
                     <input 
                        className={!this.state.orderForm.cardLastName.valid 
                            && this.state.orderForm.cardLastName.touched
                            ?  classes.invalid : classes.valid }
                        value={this.state.orderForm.cardLastName.value}
                        onChange={(event) => this.inputChangedHandler(event, 'cardLastName')}
                     />
                </td>
                <td className={classes.formCell}></td>
            </tr>
            
            <tr className={classes.formRow}>
                <td className={classes.formCell}>Card Number:</td>
                <td className={classes.formCell}></td>
                <td className={classes.formCell}></td>
            </tr>
            <tr className={classes.cardRow}>
                <td>
                    <input 
                        className={!this.state.orderForm.firstFour.valid 
                            && this.state.orderForm.firstFour.touched
                            ?  classes.cardInvalid : classes.cardValid }
                        value={this.state.orderForm.firstFour.value}
                        onChange={(event) => this.inputChangedHandler(event, 'firstFour')}
                    />
                </td>
                <td className={classes.dash}>-</td>
                <td>
                    <input 
                        className={!this.state.orderForm.secondFour.valid 
                            && this.state.orderForm.secondFour.touched
                            ?  classes.cardInvalid : classes.cardValid }
                        value={this.state.orderForm.secondFour.value}
                        onChange={(event) => this.inputChangedHandler(event, 'secondFour')}
                    />
                </td>
                <td className={classes.dash}>-</td>
                <td>
                    <input 
                        className={!this.state.orderForm.thirdFour.valid 
                            && this.state.orderForm.thirdFour.touched
                            ?  classes.cardInvalid : classes.cardValid }
                        value={this.state.orderForm.thirdFour.value}
                        onChange={(event) => this.inputChangedHandler(event, 'thirdFour')}
                    />
                </td>
                <td className={classes.dash}>-</td>
                <td>
                    <input 
                        className={!this.state.orderForm.fourthFour.valid 
                            && this.state.orderForm.fourthFour.touched
                            ?  classes.cardInvalid : classes.cardValid }
                        value={this.state.orderForm.fourthFour.value}
                        onChange={(event) => this.inputChangedHandler(event, 'fourthFour')}
                    />
                </td>
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
                <td>
                    <input 
                        className={!this.state.orderForm.security.valid 
                            && this.state.orderForm.security.touched
                            ?  classes.cardInvalid : classes.cardValid }
                        value={this.state.orderForm.security.value}
                        onChange={(event) => this.inputChangedHandler(event, 'security')}
                    />
                </td>
                <td className={classes.dash}></td>
                <td></td>
                <td className={classes.dash}></td>
                <td>
                    <input 
                        className={!this.state.orderForm.expOne.valid 
                            && this.state.orderForm.expOne.touched
                            ?  classes.cardInvalid : classes.cardValid }
                        value={this.state.orderForm.expOne.value}
                        onChange={(event) => this.inputChangedHandler(event, 'expOne')}
                    />
                </td>
                <td className={classes.dash}>/</td>
                <td>
                    <input 
                        className={!this.state.orderForm.expTwo.valid 
                            && this.state.orderForm.expTwo.touched
                            ?  classes.cardInvalid : classes.cardValid }
                        value={this.state.orderForm.expTwo.value}
                        onChange={(event) => this.inputChangedHandler(event, 'expTwo')}
                    />
                </td>
            </tr>
           
            </table>
            </form>
            <div className={classes.buttonRow}>
             <td>
                <div>
                    <button 
                        className={classes.orderButton}
                        // disabled={!this.state.formIsValid}
                        onClick={() => this.postOrder()}
                    >
                         Purchase
                   </button>
                </div>
               
                    
             </td>
             <td>
                 <p style={{color: 'red'}}>{!this.state.formIsValid ? 'you have missing or incorrect info' : ''}</p>
             </td>
           </div>
          <div className={classes.purchaseImages}>
          {this.state.cartProducts.map(product => {
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

}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Checkout);