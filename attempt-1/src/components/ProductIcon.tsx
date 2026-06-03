import { type Product } from "../types/Product"
import { Coffee, Snowflake, Microwave, Sandwich } from 'lucide-react';

type ProductIconProps = {
  product: Product;
}

export function ProductIcon({product}: ProductIconProps) {
    switch (product.category) {
        case 'food':
            return product.reheatingInstructions ? <Microwave className="min-w-[24px]"/> : <Sandwich className="min-w-[24px]"/>;
        case 'drink':
            return product.hot ? <Coffee className="min-w-[24px]"/> : <Snowflake className="min-w-[24px]"/>
    }
}