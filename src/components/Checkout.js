import React from 'react';
import checkout__ads from '../assets/checkout_banner.jpg';
import { useStateValue } from '../context/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import CheckoutSummary from './CheckoutSummary';
import { Redirect } from 'react-router-dom';

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  if (!user)
  {
    return <Redirect to="/login" />
  }
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src={checkout__ads} alt="Checkout Add" className="checkout__ads" />
        {
          basket?.length === 0 ? (
            <div>
              <h2 className="checkout__title">
                Your basket is empty
            </h2>
              <p className="checkout__subtitle">
                You have no item on your basket. Please go to shopping some item and go back here
              </p>
            </div>
          ) : <React.Fragment>
              <h2 className="checkout__title">
                Your shopping baset
              </h2>

              {
                basket.map(({ id, title, image, price, rating }) => (
                  <CheckoutProduct key={id} id={id} title={title} image={image} price={price} rating={rating} dispatch={dispatch} />
                ))
              }

            </React.Fragment>
        }
      </div>
      <div className="checkout__right">
        {
          basket?.length > 0 && <CheckoutSummary />
        }
      </div>
    </div>
  );
}

export default Checkout;
