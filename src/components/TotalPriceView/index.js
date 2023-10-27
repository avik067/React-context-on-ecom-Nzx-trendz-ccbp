import CartContext from '../../context/CartContext'

const TotalPriceView = () => {
  console.log('This is TotalPriceView Section')

  return (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value

        /* const totalPrice = cartList.reduce(
          (accumulator, currentValue) =>
            accumulator.quantity * accumulator.price +
            currentValue.quantity * currentValue.price,
        )
        console.log(totalPrice) */

        return <div>TotalPriceView</div>
      }}
    </CartContext.Consumer>
  )
}

export default TotalPriceView
