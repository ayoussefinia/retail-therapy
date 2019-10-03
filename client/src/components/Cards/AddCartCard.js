import React from 'react';

const AddCartCard = (props) => {
  const cardStyles= {
    width: '50%'

  }
  const titleStyle = {
    textAlign: 'center',
    fontSize: '1.25rem'
  }
  const priceStyle = {
    textAlign: 'center'
  }
  return (

    <div style={cardStyles}>
    
            <div className="card text-white bg-dark">
            <div className='pictureDiv'>

              <img className="card-img-top" src={props.product.imageUrls[0]} alt="Card image cap"/>

            </div>

              <div className="card-body">
                <h5 className="card-title">{}</h5>
                <div >
                <h1 style={titleStyle}>{props.product.name}</h1>
               
                <p className="card-text" style={priceStyle}>Price: {props.product.price}</p>
                

                </div>
              </div>
              {/* <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>

                <li className="list-group-item">Vestibulum at eros</li>
              </ul> */}

            </div>

    </div>
  )
}

export default AddCartCard;