import React from 'react';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import { useStateValue } from '../context/StateProvider';
import * as actionTypes from '../context/types';

const Product = ({ id, title, rating, image, price }) => {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = (id) => {
    const item = basket.find(p => p.id === id);
    if (item)
    {
      alert('Product was added to the basket before');
    } else
    {
      dispatch({
        type: actionTypes.ADD_TO_BASKET,
        payload: {
          id, title, rating, image, price
        }
      });
    }
  };
  return (
    <div className="product">
      <h4>
        {title}
      </h4>
      <p className="product__price">
        <small>$</small> <strong> {price} </strong>
      </p>
      <div className="product__rating">
        {
          Array(rating).fill().map((_, id) => (<StarHalfIcon key={id} />))
        }
      </div>
      <div className="product__actions">
        <img src={image} alt={title} className="product__image" />
        <button className="add__productButton" onClick={() => addToBasket(id)} >
          Add To Basket
        </button>
      </div>

    </div>
  );
}

export default Product;
