import React from 'react';
import classes from './input.css';

const input = (props) => {
  let inputElement = null;
  switch (props.inputtype) {
    case ('input') : 
        inputElement = <input  className="InputElement" {...props}/> 
        break;
    case ('textArea') :
        inputElement = <textarea className="InputElement" {...props}/>
        break;
    default:
        inputElement = <input className="InputElement" {...props} />
  }

return (
  <div className="Auth">
      <div className='Input'>
        <label className='Label'>{props.label}</label>
        {inputElement}
      </div>
  </div>

)


}

export default input;