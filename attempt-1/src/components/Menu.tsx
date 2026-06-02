import drinks from '../data/drinks.json';
import DrinkCard from './DrinkCard';
import { type Drink } from '../types/Drink'

type MenuProps = {
    addToCheckout: (drink: Drink) => void
}

function Menu({ addToCheckout }: MenuProps) {
    return (
        <>
            <h1>Menu</h1>

            <div className="drinks-menu">
                { drinks.map((drink) => (
                   <DrinkCard drink={drink} key={drink.id} addToCheckout={() => addToCheckout(drink)} />
                )) }
            </div>
        </>
    )
}

export default Menu;