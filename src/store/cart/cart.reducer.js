import { createSlice } from "@reduxjs/toolkit";
const cartInitialState = {
  cartItems: [],
  cartIsOpen: false,
};

const findItem = (cartItems, itemToFind) => {
  return cartItems.find((item) => item.id === itemToFind.id);
};

const addItemsToCart = (cartItems, itemToAdd) => {
  const foundItem = findItem(cartItems, itemToAdd);

  if (foundItem) {
    return cartItems.map((item) =>
      item.id === foundItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const removeItemFromCart = (cartItems, itemToRemove) => {
  const foundItem = findItem(cartItems, itemToRemove);
  if (foundItem && foundItem.quantity > 1) {
    cartItems = cartItems.map((item) => {
      if (item.id === foundItem.id) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
    return cartItems;
  } else {
    const filteredCart = cartItems.filter((item) => item.id !== foundItem.id);

    return filteredCart;
  }
};

const clearItemFromCart = (cartItems, itemToRemove) => {
  return cartItems.filter((item) => item.id !== itemToRemove.id);
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addCartItem(state, action) {
      state.cartItems = addItemsToCart([...state.cartItems], action.payload);
      state.cartQuantity += 1;
    },
    toggleCartOpen(state, _) {
      state.cartIsOpen = !state.cartIsOpen;
    },
    removeCartItem(state, action) {
      state.cartItems = removeItemFromCart(state.cartItems, action.payload);
    },
    clearCartItem(state, action) {
      state.cartItems = clearItemFromCart(state.cartItems, action.payload);
    },
  },
});

export const cartActions = cartSlice.actions;
