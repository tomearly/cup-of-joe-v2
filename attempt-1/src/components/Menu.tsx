import ProductCard from './ProductCard';
import { useFetch } from '../hooks/useFetch'
import { type Product } from '../types/Product'
import { AlertTriangleIcon, Loader } from "lucide-react"

type MenuProps = {
    addToCheckout: (product: Product) => void
}

type ApiResponse<T> = { products: T }

function Menu({ addToCheckout }: MenuProps) {
    const { data, loading, error } = useFetch<ApiResponse<Product[]>>('/api/products')
    const products = data?.products ?? []

    return (
        <>
            <h1>Menu</h1>

            { loading && <Loader />}
            { error && <AlertTriangleIcon />}

            <div className="drinks-menu">
                {products.length > 0 && products.map((product) => (
                    <ProductCard
                        product={product}
                        key={product.id}
                        addToCheckout={addToCheckout}
                    />
                ))}
            </div>
        </>
    )
}

export default Menu;