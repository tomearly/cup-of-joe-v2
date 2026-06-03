import productsData from '../data/products.json';
import ProductCard from './ProductCard';
import { type FoodProduct } from '../types/FoodProduct'
import { type DrinkProduct } from '../types/DrinkProduct'

const products = productsData as []

type MenuProps = {
    addToCheckout: (product: FoodProduct|DrinkProduct) => void
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