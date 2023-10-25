import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  //   TODO: Add your code for remove all cart items, increment cart item quantity, decrement cart item quantity, remove cart item

  removeAllCartItems = () => {
    console.log('This is  remove all func')
    this.setState({cartList: []})
  }

  addCartItem = product => {
    this.setState(prevState => ({cartList: [...prevState.cartList, product]}))
    //   TODO: Update the code here to implement addCartItem
  }

  removeCartItem = id => {
    console.log('This is remove one froom cart')
    const {cartList} = this.state
    const cartListModified = cartList.filter(each => each.id !== id)
    this.setState({cartList: cartListModified})
  }

  incrementCartItemQuantity = id => {
    console.log('This is increment one item quantity in cart')
    const {cartList} = this.state
    const cartListModified = cartList.map(each => {
      if (each.id === id) {
        return {...each, quantity: each.quantity + 1}
      }
      return each
    })
    this.setState({cartList: cartListModified})
  }

  decrementCartItemQuantity = id => {
    console.log('This is drecrement one item in cart')
    const {cartList} = this.state
    const cartListModified = cartList.map(each => {
      if (each.id === id) {
        return {...each, quantity: each.quantity - 1}
      }
      return each
    })
    this.setState({cartList: cartListModified})
  }

  render() {
    const {cartList} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          removeAllCartItems: this.removeAllCartItems,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
