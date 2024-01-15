import { useState } from "react"

const Cart = ({ cart, updateQuantity }) => {
  const [book, setBook] = useState({ quantity: 1 })

  const updateQuantity = (option) => {
    setBook({ quantity + option })
  }

  return (
    <div id="cart">
      <ul className="flex flex-row">
        { cart.map((book, index) => (
            <>
              <li key={index} className="text-center h-3 py-1 w-full">
                <strong className="font-extrabold w-8 text-left">{book.title}</strong>
                <button
                  className="bg-red-800 text-white p-2 font-extrabold rounded-full w-2"
                  onClick={updateQuantity(1)}
                >
                  +
                </button>
                <span className="w-2">{book.quantity}</span>
                <button
                  className="bg-red-800 text-white p-2 font-extrabold rounded-full w-2"
                  onClick={updateQuantity(-1)}
                >
                  -
                </button>
                <p>${priceBook}</p>
                <button className="text-red-800 font-extrabold text-s w-2 p-2" onClick={ setQuantityBook({ quantity: 0 }) }>x</button>
              </li>
            </>
          )) }
      </ul>
      <div className="" id="">
        <p>Total: </p>
        <span className="">20</span>
        <span className="">
          $ <strong className="">400</strong>
        </span>
      </div>
      {/* <hr />
      <div className="">
        <form>
          <label htmlFor="emailPerson">Ingrese mail</label>
          <input
            type="email"
            name="emailPerson"
            id="emailPerson"
            className="border bg-slate-400"
            required
          />
          <label htmlFor="namePerson">Ingrese nombre</label>
          <input
            type="text"
            name="namePerson"
            id="namePerson"
            className="border bg-slate-400"
            required
          />
          <label htmlFor="paymethod">Ingrese medio de pago</label>
          <input
            type="text"
            name="paymethod"
            id="paymethod"
            className="border bg-slate-400"
            required
          />
          <br />
          <button type="submit" className="border bg-slate-600">
            comprar
          </button>
          <button type="submit" className="border bg-slate-600">
            cancelar
          </button>
        </form>
      </div> */}
    </div>
  )
}

export default Cart
