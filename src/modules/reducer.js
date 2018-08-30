export function appReducer(state , action) {

	const {products, cart}  = state;
	const {product} = action;
	const  {id, price, title} = product || {};
	const cartItem = cart[id] || {...product, quantity: 0};
 	let quantity = cartItem.quantity;
	switch (action.type) {
		case 'ADDTOCART':
			const	inventory = product.inventory;
	 		if (inventory <=0) return state;


			return {
				...state,
				products: {
					...products,
					[id]:{
						...product,
						inventory:inventory - 1
					}
				},
				cart : {
					...cart,
					[id]:{
						id,
						title,
						price,
						quantity: quantity + 1
					}

				}
			}

		case 'REMOVE_ITEM_FROM_CART':
			let newCart = {...cart};
		 			delete newCart[id];
			return {
				cart:  quantity > 1 ?  {
					...cart,
					[id]: {
						...product,
						 quantity: quantity - 1
					}
				} : newCart,
				products:  {
					...products,
					[id]:{
						...products[id],
						inventory: products[id].inventory +1
					}
				}
			};

		case 'REMOVE_ALL_FROM_CART':
			return {
				products: {
					...products,
					[id]:{
						...products[id],
						inventory: products[id].inventory + quantity
					}
				},
				cart: newCart ? quantity : {}
			};

		case 'CHECKOUT':
			return {
				...state,
				cart : {}
		}

		default:return state;
	}
}
