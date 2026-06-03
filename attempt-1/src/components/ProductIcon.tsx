import { type Product } from "../types/ProductBase"
import { Coffee, Snowflake, Microwave, Sandwich } from 'lucide-react';

type ProductIconProps = {
  product: Product;
}

export function ProductIcon({product}: ProductIconProps) {
    switch (product.category) {
        case 'food':
            return product.reheatingInstructions ? <Microwave /> : <Sandwich />;
        case 'drink':
            return product.hot ? <Coffee /> : <Snowflake />
    }
}