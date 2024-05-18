import Product from "./Product"

const ProductList = ({ products }) => {
    return(
        <div className="product-list">
            <Product key={product.id} product={product} />
        </div>
    )
}

export default ProductList