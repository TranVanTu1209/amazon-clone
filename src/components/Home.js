import React from 'react';
import banner from '../assets/banner1.jpg';
import Product from './Product';
import { v4 as uuidv4 } from 'uuid';
const Home = () => {
  return (
    <div className="home__container">
      <img src={banner} alt="Banner" className="banner" />
      <div className="home__row">
        <Product id={uuidv4()} price={4.9} title="The Resistance: Avalon Social Deduction Game" rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/91JhcC33dTL._AC_SL1500_.jpg" />
        <Product id={uuidv4()} price={99.9} title="Unlisted by Kenneth Cole Men's Dress Shirt Slim Fit Checks and Stripes (Patterned)"
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71zrQU%2ByLvL._AC_SL1500_.jpg" />
      </div>
      <div className="home__row">
        <Product id={uuidv4()} price={4.9} title="Play-Doh Modeling Compound 10 Pack Case of Colors,
         Non-Toxic, Assorted Colors, 2 Oz Cans, Ages 2 & Up, (Amazon Exclusive), Multicolor" rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/510yp4Dw5pL._AC_SL1000_.jpg" />
        <Product id={uuidv4()} price={99.9} title="iOttie Easy One Touch 4 Dash & Windshield Car Mount Phone Holder 
        Desk Stand Pad & Mat for iPhone, Samsung, Moto, Huawei, Nokia, LG, Smartphones" rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71YGe6bOE0L._AC_SL1500_.jpg" />
        <Product id={uuidv4()} price={99.9} title="Trust No One (Devlin & Falco Book 1) Kindle Edition" rating={3}
          image="https://m.media-amazon.com/images/I/51+AwURzysL.jpg" />
      </div>
      <div className="home__row">
        <Product id={uuidv4()} price={99.9} title="Aveeno Baby Daily Bathtime Solutions Gift Set to Nourish Skin for Baby and Mom, 4 items"
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71gjJZ4Df2L._AC_UX679_.jpg" />
      </div>
    </div>
  )
}

export default Home;
