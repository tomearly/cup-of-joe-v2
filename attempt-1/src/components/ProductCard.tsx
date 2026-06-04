import { Link } from "react-router";
import { ProductIcon } from "../components/ProductIcon";
import { type DrinkProduct } from "../types/DrinkProduct"
import { type FoodProduct } from "../types/FoodProduct"
import { type Product } from "../types/Product"
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from "@/components/ui/card"
import { ProductImage } from "./ProductImage"

type ProductCardProps = {
    product: DrinkProduct | FoodProduct,
    addToCheckout: (product: Product) => void
}

function ProductCard({ product, addToCheckout }: ProductCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="h-[50px] overflow-hidden flex"><ProductIcon product={product} /> <div className="ml-2">{product.name}</div></CardTitle>
                <CardDescription className="h-[100px]">{product.description}</CardDescription>
                <CardAction className="h-[20%]">£{product.price.toFixed(2)}</CardAction>
            </CardHeader>
            <CardContent>
                <ProductImage src={product.imageUrl} alt={product.name} />
            </CardContent>
            <CardFooter className="flex w-full justify-end">
                <Button onClick={() => addToCheckout(product)}>Add to Cart</Button>
                <Link to={`/product-page/${product.id}`}>
                    <Button variant="link">Show Allergens</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default ProductCard;