import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../context/StateProvider';
import { getBasketTotal } from "../context/reducer";
const CheckoutSummary = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout__summary">
      <CurrencyFormat
        renderText={value => (
          <div>
            <p>
              Subtotal : ({basket.length}  items)  : <strong> {`${value}`}  </strong>
            </p>
            <small className="checkout__summary_giftCode">
              <input type="checkbox" /> This order contains gift code
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        thoundsandSeperator={true}
        prefix="$"
      />
      <button className="summary__button">
        Proceed To Checkout
       </button>
    </div>
  )
}

export default CheckoutSummary;
