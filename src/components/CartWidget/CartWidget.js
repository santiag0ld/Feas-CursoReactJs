import React from 'react';
import cart from './assets/cart.png';
import '../../index.css';


const CartWidget = () => {
  return (
    <div>
        <img src={cart} alt='cart-widget' className="cart-icon"/>
        <span className='cart-number'>0</span>
    </div>
  )
}

export default CartWidget;