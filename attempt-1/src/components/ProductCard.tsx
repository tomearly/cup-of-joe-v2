import { Link } from "react-router";
import { ProductIcon } from "@/components/ProductIcon";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from "@/components/ui/card"
import { ProductImage } from "./ProductImage"
import { type DrinkProduct } from "@/types/DrinkProduct"
import { type FoodProduct } from "@/types/FoodProduct"

import { useCart } from "@/context/cart";

type ProductCardProps = {
    product: DrinkProduct | FoodProduct
}

export function ProductCard({ product }: ProductCardProps) {
    
    const { addToCart } = useCart()
    
    const cartItem = {
        productId: product.id,
        quantity: 1,
        price: product.price,
        name: product.name
    }

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
            <CardFooter className="flex w-full justify-between">
                <Button onClick={() => addToCart(cartItem)}>Add to Cart</Button>
                <Link to={`/product-page/${product.id}`}>
                    <Button variant="link">Show Allergens</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}
