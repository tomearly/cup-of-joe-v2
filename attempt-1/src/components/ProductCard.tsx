import { ProductIcon } from "../components/ProductIcon";
import { type DrinkProduct } from "../types/DrinkProduct"
import { type FoodProduct } from "../types/FoodProduct"
import { type Product } from "../types/Product"
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"

type ProductCardProps = {
    product: DrinkProduct | FoodProduct,
    addToCheckout: (product: Product) => void
}

function ProductCard({ product, addToCheckout }: ProductCardProps) {
    return (
        <Card className="p-4">
            <h2 className="text-xl font-bold flex mb-2"><span className="mr-2">{product.name}</span> <ProductIcon product={product} /></h2>
            <p>{product.description}</p>
            <p className="mt-4">£{product.price.toFixed(2)}</p>
            <img className="mt-4" src={product.imageUrl} alt={product.name} width="200" />
            { 'reheatingInstructions' in product && product.reheatingInstructions && <p className="mt-2"><em>{product.reheatingInstructions}</em></p>}
            <p><Button className="my-4" onClick={() => addToCheckout(product)}>Add to Cart</Button></p>
        </Card>
    )
}

export default ProductCard;