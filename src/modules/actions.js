export const addToCart = (product) => ({
	type: 'ADDTOCART',
	product
});

export const removeItem = (product) => ({
	type: 'REMOVE_ITEM_FROM_CART',
   product
});

export const removeAllItems = () => ({
	type: 'REMOVE_ALL_FROM_CART',

});


export const checkOut = () => ({
	type: 'CHECKOUT'
});
