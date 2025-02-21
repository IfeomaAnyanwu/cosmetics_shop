import { createContext, useReducer } from "react";

const CartContext = createContext({
  //shape/content of the cart context
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

//useReducer function needed by useReducer as import
//the function has state and action as parameters which will be passed by react itself. action parameter tells react how to update the state parameter.
// the goal of the cartReducer function is to return an updated state.

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    // update the state to add a product
    //state.items.push(action.item); will not be used to update cart content because it will increase image of an item instead of just the number.
    //we use find method to get item with same id as the one received from action.
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    //store the existing array in var to be used in the else section
    const updatedItems = [...state.items];

    // if the index exist (>-1)
    if (existingCartItemIndex > -1) {
      //increase just the qty

      //store the found exisitng item in var
      const existingItem = state.items[existingCartItemIndex];

      //spread/existing item's property and increase Qty by 1
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };

      // re-insert the updated item to array to capture  new Qty
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // push the item received from action to the array and make qty start at 1
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    //outside the inner if block, return the updated state of the reducer.
    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    //1. find index of item for removal
    //2. we dont need to check if the item exist b/c we can only remove an item from shooping car hile inside the shopping cart.
    //3 we only check if the items >1 and we reduce, if =1, we remove entire item from cart.
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    //4. store the found item in a var
    const existingCartItem = state.items[existingCartItemIndex];

    //store old array in var outside the function below so that it can be used for if and else
    const updatedItems = [...state.items];
    //if found, remove the found item from the old exisitng array
    if (existingCartItem.quantity === 1) {
      //call splice method on the old array above with no. of items to remove

      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      //reduce quatity of the found item and store the outcome in var
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      //update the old array to reflect the reduced Qty
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    //outside the inner if block, return the updated state of the reducer.
    return { ...state, items: updatedItems };
  }

  // return the new state after add or remove
  return state;
}

//====CARD LOGIC ENDS HERE, WE NOW CONNECT THE CARD LOGIC TO THE COMPONENTS BY HELP OF CARTCONTEXT=====

//cart provider to wrap round the cardContext component
//cardcontext has children that need to access the cart content, so they are wrapped in the cartcontext.provider tags
//export cartcontextprovider function not as default and
//export CartContext object as default so that they can be used externally.

export function CartContextProvider({ children }) {
  //add stateful logic here to manage the cart context content above, add, remove etc.
  // useState can be used t pass contents via cartcontext.provider to the components but useReducer is better because the state to be managed is complex. useReducer makes managing complex states, simpler.
  // import useReducer from react and create its function.

  //const [cart, dispatchCartAction] was added after ADD and REMOVE card logic.
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] }); //cartReducer function passed to useReducer with initial value of items[].

  //this stores the new cart content after each change from where it is distributed to interested components

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };

  // console log here to test if add to cart button works by sending to cart
  console.log(cartContext);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
