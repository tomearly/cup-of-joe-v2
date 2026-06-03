import { ProductIcon } from "../components/ProductIcon";
import { type DrinkProduct } from "../types/DrinkProduct"
import { type FoodProduct } from "../types/FoodProduct"
import { type Product } from "../types/Product"

type ProductCardProps = {
    product: DrinkProduct | FoodProduct,
    addToCheckout: (product: Product) => void
}

function ProductCard({ product, addToCheckout }: ProductCardProps) {
    return (
        <div>
            <h2 className="text-xl font-bold flex mb-2"><span className="mr-2">{product.name}</span> <ProductIcon product={product} /></h2>
            <p>{product.description}</p>
            <p>£{product.price.toFixed(2)}</p>
            <img src={product.imageUrl} alt={product.name} width="200" />
            { 'reheatingInstructions' in product && product.reheatingInstructions && <p><em>{product.reheatingInstructions}</em></p>}
            <p><button onClick={() => addToCheckout(product)}>Add to Cart</button></p>
        </div>
    )
}

export default ProductCard;