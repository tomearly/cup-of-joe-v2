import { Coffee, Snowflake, Sandwich } from 'lucide-react';
import { type Product } from "@/types/Product"

type ProductIconProps = {
    product: Product;
}

export function ProductIcon({ product }: ProductIconProps) {
    switch (product.category) {
        case 'food':
            return <Sandwich className="min-w-[24px]" />
        case 'drink':
            return product.hot ? <Coffee className="min-w-[24px]" /> : <Snowflake className="min-w-[24px]" />
    }
}