import CartContext from '../../context/CartContext'
import './index.css'

const TotalPriceView = () => {
  console.log('This is TotalPriceView Section')

  return (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value

        const totalPrice = cartList.reduce(
          (accumulator, currentValue) =>
            accumulator + currentValue.quantity * currentValue.price,
          0,
        )

        /* console.log(totalPrice) */

        return (
          <div className="total-price-div row justify-end align-center">
            <div>
              <p>
                <h1>Order Total</h1>
                <strong style={{color: 'black'}}>:RS {totalPrice}/-</strong>
              </p>
              <p>{cartList.length} Items in cart</p>
              <button type="button" className="check-out">
                Checkout
              </button>
            </div>
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}

export default TotalPriceView
