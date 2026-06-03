import productsData from '../data/products.json';
import ProductCard from './ProductCard';
import { type Product } from '../types/ProductBase'

const products = productsData as Product[]

type MenuProps = {
    addToCheckout: (product: Product) => void
}

function Menu({ addToCheckout }: MenuProps) {
    return (
        <>
            <h1>Menu</h1>

            <ul className="drinks-menu">
                { products.map((product) => (
                   <ProductCard product={product} key={product.id} addToCheckout={addToCheckout} />
                )) }
            </ul>
        </>
    )
}

export default Menu;