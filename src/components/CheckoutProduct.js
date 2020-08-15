import React from 'react';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import * as actionTypes from '../context/types';
const CheckoutProduct = ({ id, title, image, price, rating, dispatch }) => {

  const removeFromBasket = (id) => {
    dispatch({
      type: actionTypes.REMOVE_FROM_BASKET,
      payload: id
    });
  }
  return (
    <div className="checkoutProduct">
      <img src={image} alt={title} className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <h5>
          {title}
        </h5>
        <p>
          $ <strong> {price} </strong>
        </p>
        <div className="checkoutProduct__rating">
          {
            Array(rating).fill().map((_, id) => (<StarHalfIcon key={id} />))
          }
        </div>
        <div className="product__actions">
          <button className="remove__productButton" onClick={() => removeFromBasket(id)} >
            Remove From Basket
        </button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutProduct;
