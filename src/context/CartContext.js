import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  updateExistingQuantity: () => {},
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
})

export default CartContext
