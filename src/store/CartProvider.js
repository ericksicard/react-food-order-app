import { useReducer } from 'react';

import CartContext from './cart-context';

// constant that defines the initial state of useReducer and 
// is returned in cartReducer function to update the current state.
const defaultCartState = {
    items: [],
    totalAmount: 0
};

// function called by useReducer through the "dispatchCartAction" function
// the "state" argument is the state snapshoot (current state) automatically passed by React
// the "action" argument is the updated data passed to "cartReducer" from "dispatchCartAction" function at "useReducer"
const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
};

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = item => {
        // the "dispatchCartAction" function will execute the "cartReducer" function, passing the parameters defined
        dispatchCartAction({type:'ADD', item:item});
    };

    const removeItemHandler = id => {
        // the "dispatchCartAction" function will execute the "cartReducer" function, passing the parameters defined
        dispatchCartAction({type:'REMOVE', id:id})
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;