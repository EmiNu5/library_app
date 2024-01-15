import { useRouteError } from 'react-router-dom'

const PageNotFound = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div className="text-center mt-20">
      <h1 className="text-4x1 font-bold mb-4 text-red-700">
        404! Page Not Found
      </h1>
      <p className="text-4x1 font-bold mb-4 text-red-600 underline">
        <i>{error.statusText || error.message}</i>
      </p>
      <button
        className="bg-red-800 text-white m-4 p-4 rounded font-bold"
        onClick={() => window.location.reload(true)}
      >
        F5
      </button>
      <a href="/" className="bg-red-800 text-white m-4 p-4 rounded font-bold">
        Home
      </a>
    </div>
  )
}

export default PageNotFound
