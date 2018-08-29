export function appReducer(state , action) {

	const {products, cart}  = state;
	const {product} = action
	const {id} = product || {};
	const cartItem = cart[id] || {...product, quantity: 0};

	switch (action.type) {
		case 'ADDTOCART':
		const  {id, price, title} = product || {};
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
					quantity: cartItem.quantity + 1
				}

			}
		}


		case 'REMOVE_ITEM_FROM_CART':
		return {
			...state,
			products: {
				...products,
				[id]:{
					...products[id],
					inventory:inventory + 1
				}
			},
			cart : {
				...cart,
				[id]:{
	
					quantity: cartItem.quantity - 1
			}

		}

		}


		case 'REMOVE_ALL_FROM_CART':
		return {
			...state,
			removeAllItems: {}
		}

		case 'CHECKOUT':
		return {
			...state,
			cart : {}
	}

		default:return state;

	}
}
