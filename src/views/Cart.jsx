const Cart = () => {
  return (
    <div id="cart">
      <ul>
        {cart.map((item, index) => (
          <>
            <li>
              <strong className="font-extrabold">libro1</strong>
              <button
                className="bg-red-800 text-white p-2 font-extrabold rounded-full"
                onClick={addOneBook}
              >
                +
              </button>
              <span className="">{quantityBook}</span>
              <button
                className="bg-red-800 text-white p-2 font-extrabold rounded-full"
                onClick={delOneBook}
              >
                -
              </button>
              <p>${oriceBook}</p>
              <button className="text-red-800 font-extrabold text-s">x</button>
            </li>
          </>
        ))}
      </ul>
      <div className="" id="">
        <p>Total: </p>
        <span className="">20</span>
        <span className="">
          $ <strong className="">400</strong>
        </span>
      </div>
      <hr />
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
      </div>
    </div>
  )
}

export default Cart
