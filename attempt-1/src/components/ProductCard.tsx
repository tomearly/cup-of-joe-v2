import { type Product } from "../types/Product"

type ProductCardProps = {
    product: Product,
    addToCheckout: (product: Product) => void
}

function ProductCard({ product, addToCheckout }: ProductCardProps) {
    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>£{product.price.toFixed(2)}</p>
            <img src={product.imageUrl} alt={product.name} width="200" />
            <p><button onClick={() => addToCheckout(product)}>Add to Cart</button></p>
        </div>
    )
}

export default ProductCard;