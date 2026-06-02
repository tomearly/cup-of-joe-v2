import drinks from '../data/drinks.json';
import DrinkCard from './DrinkCard';

type MenuProps = {
    addToCheckout: () => void
}

function Menu({ addToCheckout }: MenuProps) {
    return (
        <>
            <h1>Menu</h1>

            <ul className="drinks-menu">
                { drinks.map((drink) => (
                   <DrinkCard drink={drink} key={drink.id} addToCheckout={addToCheckout} />
                )) }
            </ul>
        </>
    )
}

export default Menu;