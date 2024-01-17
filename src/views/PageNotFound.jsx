import { useRouteError } from 'react-router-dom'

const PageNotFound = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div className="text-center mt-20">
      <h1 className='title'>
        404! Page Not Found
      </h1>
      <p className="">
        <i>{error.statusText || error.message}</i>
      </p>
      <button
        className="btn"
        onClick={() => window.location.reload(true)}
      >
        F5 - Actualizar
      </button>
      <a href="/" className="btn">
        Inicio
      </a>
    </div>
  )
}

export default PageNotFound
