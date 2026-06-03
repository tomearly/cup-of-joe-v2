import { type DrinkProduct } from "../types/DrinkProduct"
import { type FoodProduct } from "../types/FoodProduct"
import { Coffee, Snowflake, Microwave, Sandwich } from 'lucide-react';

type ProductIconProps = {
  product: DrinkProduct | FoodProduct;
}

export function ProductIcon({product}: ProductIconProps) {
    switch (product.category) {
        case 'food':
            return product.reheatingInstructions ? <Microwave /> : <Sandwich />;
        case 'drink':
            return product.hot ? <Coffee /> : <Snowflake />
    }
}