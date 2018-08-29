import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../modules/actions';




const ProductList = ({items, addToCart}) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <p>
          {item.title} ${item.price} | {item.inventory }
        </p>
        <button
          onClick={() => addToCart(item)}
					disabled={item.inventory > 0 ? '' : 'disabled'}

        >{item.inventory > 0 ? 'Add To Cart' : 'Sold Out'}
        </button>
      </li>
    ))}
  </ul>
);

const mapStoreProps = ({products}) => ({
	items: Object.values(products)
});

const mapActionsProps = {
	addToCart: addToCart
};

export default connect(
  mapStoreProps,
	mapActionsProps

)(ProductList);
