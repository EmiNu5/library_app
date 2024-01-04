const PageNotFound = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4x1 font-bold mb-4 text-red-700">
        404! Page Not Found
      </h1>
      <button
        className="bg-red-800 text-white py-4 px-10 rounded font-bold"
        onClick={() => window.location.reload(true)}
      >
        F5
      </button>
    </div>
  )
}

export default PageNotFound
