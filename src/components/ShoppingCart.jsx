import React from 'react';
import { connect } from 'react-redux';
import { removeItem, removeAllItems, checkOut } from '../modules/actions';



const ShoppingCart = ({carts, removeItem, removeAllItems, checkOut}) => (
<div>
<h1>Your Cart</h1>
	<ul>
    {carts.map(cart => (
      <li key={cart.id}>
				<p>
					{cart.title} ${cart.price}, | X{cart.quantity}
        </p>
				<button
						onClick={() => removeItem(cart)}
					>Remove One
				</button>
				<button
						onClick={() => removeAllItems(cart)}
					>Remove All
				</button>

      </li>
    ))}
		 <p>Total: ${carts.reduce((total, cart) => parseFloat((total + cart.price * cart.quantity).toFixed(2)), 0)}</p>
		<button
			onClick={() => checkOut(carts)}
		>Checkout
		</button>
  </ul>
	</div>
);

const mapStoreProps = ({cart}) => ({
	carts: Object.values(cart)
});

const mapActionsProps = {
	checkOut: checkOut,
	removeItem: removeItem,
	removeAllItems: removeAllItems
};

export default connect(
  mapStoreProps,
	mapActionsProps

)(ShoppingCart);
