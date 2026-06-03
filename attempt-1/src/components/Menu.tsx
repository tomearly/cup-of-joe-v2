import { useEffect, useState } from "react";
import ProductCard from './ProductCard';
import { type Product } from '../types/Product'

// const products = productsData as Product[]

type MenuProps = {
    addToCheckout: (product: Product) => void
}

function Menu({ addToCheckout }: MenuProps) {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('/api/products')
                if (!res.ok) throw new Error(`HTTP ${res.status}`)
                const data = await res.json()
                setProducts(Array.isArray(data) ? data : data?.products ?? [])
            } catch (err) {
                setError('Failed to load products');
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

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