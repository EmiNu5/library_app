const DetailsBook = ({ selectedBook }) => {
    return(
        <div className="bg-orange-500 ">
        { selectedBook ? (
            <div className="">
                <h2 className="text-red-400">{ selectedBook.title }</h2>
            </div>
        ) : ('') }
        </div>
    )
}

export default DetailsBook