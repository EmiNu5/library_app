const BuyForm = () => {
  return (
    <div className="">
      <form>
        <label htmlFor="emailPerson">Ingrese mail</label>
        <input
          type="email"
          name="emailPerson"
          id="emailPerson"
          required
        />
        <label htmlFor="namePerson">Ingrese nombre</label>
        <input
          type="text"
          name="namePerson"
          id="namePerson"
          required
        />
        <label htmlFor="paymethod">Ingrese medio de pago</label>
        <input
          type="text"
          name="paymethod"
          id="paymethod"
          required
        />
        <br />
        <button type="submit" className="btn">
          comprar
        </button>
        <button type="submit" className="btn">
          cancelar
        </button>
      </form>
    </div>
  )
}

export default BuyForm
