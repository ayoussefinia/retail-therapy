import React from 'react';

const DeleteModal = (props) => {
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
    width: '20%',
    height: '25%',
    borderRadius: '5px',
    margin: '.5rem',
    fontSize: '1.25rem',
    fontWeight: '600',
    background: 'white',
    border: '1px solid black'
  }
  const button2Styles = {
    width: '20%',
    height: '25%',
    borderRadius: '5px',
    margin: '.5rem',
    fontSize: '1.25rem',
    fontWeight: '600',
    color: 'white',
    background: 'black',
    border: 'black'
  }
  const titleStyle = {
    marginBottom: '1rem',
    textAlign: 'center'
  }

  return (
    <div>
        <div style={modalActiveBlackout}></div>
        <div style={deleteModalStyles}>
        <div style={topDiv}>
           <h1 style={titleStyle}>Are you sure you want to delete?</h1>
         
           {props.children}
        </div>
        <div style={bottomDiv}>
          <button style={button1Styles} className='button' onClick={props.cancel}>Cancel</button>
          <button style={button2Styles} className='button' onClick={props.confirm}>DELETE</button>
        </div>
         

        </div>
    </div>

  )

}

export default DeleteModal;