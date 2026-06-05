// src/pages/product-page.tsx
import { AlertTriangleIcon, ArrowLeft, Loader } from "lucide-react"
import { Link, useParams } from "react-router"
import { type Product } from "../types/Product"
import { useFetch } from "../hooks/useFetch"
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent } from "@/components/ui/card"
import { ProductImage } from "@/components/ProductImage"
import { ALLERGEN_IMAGES } from "@/types/Allergens"

export function ProductPage() {
    const { id } = useParams<{ id: string }>();
    const { data, loading, error } = useFetch<Product>(`/api/products/${id}`)

    const allergens = data?.allergens || []

    const allergenIcons = allergens.map((allergen) =>
        <img alt={allergen} key={allergen} className="allergen-icon" src={ALLERGEN_IMAGES[allergen]} />
    );

    return (
        <div className="mt-8">
            <Link to="/" className="mb-8 flex">
                <ArrowLeft></ArrowLeft>Menu
            </Link>
            <h1 className="text-3xl font-bold mt-4 mb-8">Product Allergens</h1>

            {loading && <Loader className="animate-spin" />}
            {error && <AlertTriangleIcon />}
            {data &&
                <Card>
                    <CardHeader>
                        <CardTitle className="h-[50px] overflow-hidden flex">{data.name}</CardTitle>
                        <CardDescription className="h-[100px]">{data.description}
                            {'reheatingInstructions' in data && data.reheatingInstructions && <p className="mt-2"><em>{data.reheatingInstructions}</em></p>}
                        </CardDescription>
                        <CardAction className="h-[20%] flex">

                            {allergenIcons}

                        </CardAction>
                    </CardHeader>
                    <CardContent>
                        <ProductImage src={data.imageUrl} alt={data.name} />
                    </CardContent>
                </Card>
            }
        </div>
    );
}
