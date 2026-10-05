import { ProductCard } from './ProductCard'
import { AlertTriangleIcon, Loader } from "lucide-react"
import { type Product } from '@/types/Product'
import { useFetch } from '@/hooks/useFetch'

type ApiResponse<T> = { products: T }

export function Menu() {
    const { data, loading, error } = useFetch<ApiResponse<Product[]>>('/api/products')
    const products = data?.products ?? []

    return (
        <>
            <h1 className="text-3xl font-bold mt-4 mb-8">Menu</h1>

            { loading && <Loader className="animate-spin" />}
            { error && <AlertTriangleIcon />}

            <div className="drinks-menu">
                {products.length > 0 && products.map((product) => (
                    <ProductCard
                        product={product}
                        key={product.id}
                    />
                ))}
            </div>
        </>
    )
}
