import { type DrinkProduct } from "../types/DrinkProduct"
import { type FoodProduct } from "../types/FoodProduct"
import { type Product } from "../types/Product"
import { Coffee, Snowflake, Microwave, Sandwich } from 'lucide-react';

type ProductCardProps = {
    product: DrinkProduct | FoodProduct,
    addToCheckout: (product: Product) => void
}

function ProductCard({ product, addToCheckout }: ProductCardProps) {

    function productIcon() {
        switch(product.category) {
            case 'food':
                return product.reheatingInstructions ? <Microwave /> : <Sandwich />;
            case 'drink':
                return product.hot ? <Coffee /> : <Snowflake />
        }
    }

    return (
        <div>
            <h2>{product.name}</h2>
            { productIcon() }
            <p>{product.description}</p>
            <p>£{product.price.toFixed(2)}</p>
            <img src={product.imageUrl} alt={product.name} width="200" />
            <p><button onClick={() => addToCheckout(product)}>Add to Cart</button></p>
        </div>
    )
}

export default ProductCard;