import React from 'react';
import useStore from './Store';

export default function Cart() {
  const cart = useStore((state) => state.cart);
  const addItem = useStore((state) => state.addItem);

  return (
    <div>
      <h1>Simple Cart</h1>
      
      <div>
        <button onClick={() => addItem('burger')}>Add Burger</button>
        <p>Burgers in cart: {cart.burger}</p>
      </div>
      <div>
        <button onClick={() => addItem('icecream')}>Add Ice Cream</button>
        <p>Ice Creams in cart: {cart.icecream}</p>
      </div>
      <div>
        <button onClick={() => addItem('pizza')}>Add Pizza</button>
        <p>Pizzas in cart: {cart.pizza}</p>
      </div>
      <div>
        <button onClick={() => addItem('chicken')}>Add Chicken</button>
        <p>Chickens in cart: {cart.chicken}</p>
      </div>
    </div>
  );
}
