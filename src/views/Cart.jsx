const Cart = ({ cartBooks, addToCart, delToCart }) => {

  return (
    <div id="cart">
      {/* { cartBooks.length == 0 && <div>Carrito vacio</div> } */}
      {cartBooks.map((book, index) => 
        <div key={index} className="">
          <div className="">{book.title}</div>
          <div className="">
            <button className="" onClick={ () => addToCart(book) }>+</button>
            <p>{ ' ' }</p>
            <button className="" onClick={ () => delToCart(book) }>-</button>
          </div>
          <div className="">{ book.quantity }</div>
          <div className="">${ book.price }</div>
        </div>
      )}
    </div>
  )
}

export default Cart
