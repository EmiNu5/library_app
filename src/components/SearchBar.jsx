// eslint-disable-next-line react/prop-types
function SearchBar({textoAbuscar,cambioTextoBusqueda}){
    return (
        <div className="">
            <input className="rounded-md text-2xl" type="text" placeholder="Let's search" value={textoAbuscar} onChange={(e)=>cambioTextoBusqueda(e.target.value)} required />
        </div>
    )

}

export default SearchBar