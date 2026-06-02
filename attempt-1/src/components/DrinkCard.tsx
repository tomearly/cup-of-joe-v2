import type { Drink } from "../types/Drink"

type DrinkCardProps = {
    drink: Drink,
    addToCheckout: (drink: Drink) => void
}

function DrinkCard({ drink, addToCheckout }: DrinkCardProps) {
    return (
        <div>
            <h2>{drink.name}</h2>
            <p>{drink.description}</p>
            <p>£{drink.price.toFixed(2)}</p>
            <img src={drink.imageUrl} alt={drink.name} width="200" />
            <p><button onClick={() => addToCheckout(drink)}>Add to Cart</button></p>
        </div>
    )
}

export default DrinkCard;