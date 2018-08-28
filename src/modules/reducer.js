export function appReducer(state , action) {

	 const {products, cart}  = state;
	 const {product} = action



	switch (action.type) {
		case 'ADDTOCART':
		const  {id, price, title} = product
		return {
			...state,




		}

		case 'CHECKOUT':

			break;
		default:return state;

	}
}
