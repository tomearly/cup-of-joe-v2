import ProductCard from './ProductCard';
import { useFetch } from '../hooks/useFetch'
import { type Product } from '../types/Product'

type MenuProps = {
    addToCheckout: (product: Product) => void
}

type ApiResponse<T> = { products: T }

function Menu({ addToCheckout }: MenuProps) {


    const { data } = useFetch<ApiResponse<Product[]>>('/api/products')
    const products = data?.products ?? []

    return (
        <>
            <h1>Menu</h1>

            <ul className="drinks-menu">
                {products.length > 0 ? products.map((product) => (
                    <ProductCard product={product} key={product.id} addToCheckout={addToCheckout} />
                ))
                    : <li>No products found</li>}
            </ul>
        </>
    )
}

export default Menu;