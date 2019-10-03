import React, {useState} from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'




const AddCartModal = (props) => {

  const options = [
    { value: '1', label: 'XS' },
    { value: '2', label: 'S'},
    { value: '3', label: 'M' },
    { value: '4', label: 'L' },
    { value: '5', label: 'XL' },
    { value: '6', label: 'XXL' }
  ];
  const defaultOption = options[0];
  const deleteModalStyles = {
    border: '1px solid balck',
    background: 'white',
    width: '40vw',
    position: 'absolute',
    left: '30vw',
    top: '20vh',
    zIndex: '10',
    // height: '70vh',
    borderRadius: '5px',
    padding: '1rem'
  }
  const modalActiveBlackout = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '150%',
    background: 'black',
    opacity: '.7',
    zIndex: '10'
  }
  const topDiv = {
    width: '100%',
    height: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
  const bottomDiv = {
    width: '100%',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: '1rem'
  }
  const button1Styles = {
    width: '30%',
    height: '25%',
    borderRadius: '5px',
    margin: '.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    background: 'white',
    border: '1px solid black'
  }
  const button2Styles = {
    width: '30%',
    height: '25%',
    borderRadius: '5px',
    margin: '.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    color: 'white',
    background: 'black',
    border: 'black'
  }
  const titleStyle = {
    marginBottom: '1rem',
    textAlign: 'center'
  }
const inputContainer = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  margin: '1rem'
}
const inputStyle = {
  border: '1px solid black',
  borderRadius: '5px',
  margin: '0 .5rem',
  width: '2rem'
}
const [state, setState] = useState({
  sizeSelection: options[0]
})
const _onSelect = (event) => {
  let index = Number(event.value-1)
  setState({sizeSelection: options[index]})
}


  return (
    <div>
        <div style={modalActiveBlackout}></div>
        <div style={deleteModalStyles}>
        <div style={topDiv}>
           {props.children}
        </div>
        <div style={inputContainer}>
        <h6> Choose Quantity: </h6>
         
          <input style={inputStyle} onChange={props.changeQuantity} type="text"/>
          {props.product.category === 'Apparel' ? <Dropdown options={options} onChange={_onSelect} value={state.sizeSelection} placeholder="Select an option" /> : '' }
          
        </div>
        <div style={bottomDiv}>
        <button style={button2Styles} className='button' onClick={props.addToCart}>Add To Cart</button>
        <button style={button1Styles} className='button' onClick={props.cancel}>Cancel</button>
         
        </div>
         

        </div>
    </div>

  )

}

export default AddCartModal;