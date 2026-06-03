import { type FoodProduct } from "../types/FoodProduct"
import { type DrinkProduct } from "../types/DrinkProduct"
import { type Product } from "../types/Product"
import { Coffee, Snowflake } from 'lucide-react';

type ProductCardProps = {
    product: FoodProduct | DrinkProduct,
    addToCheckout: (product: Product) => void
}

function ProductCard({ product, addToCheckout }: ProductCardProps) {
    return (
        <div>
            
            <h2>{product.name} { 'hot' in product && product.hot && <><Coffee/></> } { 'hot' in product && !product.hot && <><Snowflake /></> }</h2>
            <p>{product.description}</p>
            <p>£{product.price.toFixed(2)}</p>
            <img src={product.imageUrl} alt={product.name} width="200" />
            <p><button onClick={() => addToCheckout(product)}>Add to Cart</button></p>
        </div>
    )
}

export default ProductCard;