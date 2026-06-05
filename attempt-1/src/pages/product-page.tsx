import { AlertTriangleIcon, ArrowLeft, Loader } from "lucide-react"
import { Link, useParams } from "react-router"
import { useFetch } from "@/hooks/useFetch"
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent } from "@/components/ui/card"
import { ProductImage } from "@/components/ProductImage"
import { ALLERGEN_IMAGES } from "@/types/Allergens"
import { type Product } from "@/types/Product"

export function ProductPage() {
    const { id } = useParams()
    const { data, loading, error } = useFetch<Product>(id ? `/api/products/${id}` : "")
    const allergens = data?.allergens || []

    const allergenIcons = allergens.map((allergen) => (
        <img 
            alt={allergen} 
            key={allergen} 
            className="allergen-icon w-8 h-8 object-contain" 
            src={ALLERGEN_IMAGES[allergen]} 
        />
    ));

    return (
        <div className="mt-8 max-w-2xl mx-auto">
            <Link to="/" className="mb-8 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" /> Menu
            </Link>
            
            <h1 className="text-3xl font-bold mt-4 mb-8">Product Details & Allergens</h1>

            {loading && (
                <div className="flex items-center gap-2 text-muted-foreground">
                    <Loader className="animate-spin w-5 h-5" /> Loading product data...
                </div>
            )}
            
            {error && (
                <div className="flex items-center gap-2 text-destructive bg-destructive/10 p-4 rounded-lg">
                    <AlertTriangleIcon className="w-5 h-5" /> 
                    <span>Failed to load product details. Please try refreshing.</span>
                </div>
            )}
            
            {data && (
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold flex items-center">{data.name}</CardTitle>
                        <CardDescription className="space-y-2 mt-2">
                            <p>{data.description}</p>

                            {data && 'reheatingInstructions' in data && data.reheatingInstructions && (
                                <p className="mt-2 text-sm bg-muted p-2 rounded border border-dashed">
                                    <strong>Reheating Instructions:</strong> <em>{data.reheatingInstructions}</em>
                                </p>
                            )}
                        </CardDescription>
                        
                        {allergens.length > 0 && (
                            <CardAction className="flex gap-2 mt-4 pt-4">
                                {allergenIcons}
                            </CardAction>
                        )}
                    </CardHeader>
                    <CardContent>
                        <ProductImage src={data.imageUrl} alt={data.name} />
                    </CardContent>
                </Card>
            )}
        </div>
    );
}