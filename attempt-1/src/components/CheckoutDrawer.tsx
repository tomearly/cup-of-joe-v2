import { useEffect, useRef } from "react"
import { Link } from "react-router"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetFooter
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { totalCartCost } from "../lib/utils"
import { type CartItem } from "../types/CartItem"

interface Product {
    id: string;
    name: string;
    price: number;
}

interface CheckoutProps {
    isOpen: boolean;
    onClose: () => void;
    product: Product | null;
    items: CartItem[]
}

export function CheckoutDrawer({ isOpen, onClose, product, items }: CheckoutProps) {
    const checkoutBtnRef = useRef<HTMLButtonElement>(null);

    const totalCost = totalCartCost(items);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => checkoutBtnRef.current?.focus(), 100);
        }
    }, [isOpen]);

    if (!product) return null;

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent side="right" className="w-[400px] sm:w-[540px] flex flex-col justify-between">
                <div>
                    <SheetHeader>
                        <SheetTitle>Review Your Order</SheetTitle>
                        <SheetDescription>
                            You have added {product.name}
                        </SheetDescription>
                    </SheetHeader>

                    <div className="space-y-4 border-t pt-4">
                        {items.map(item => (
                            <div key={item.productId} className="flex justify-between items-center mb-0">
                                <div>
                                    <h4 className="px-4 font-medium text-lg">{item.name}</h4>
                                </div>
                                <p className="font-bold text-lg pr-5">£{item.price.toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <SheetFooter className="border-t pt-4 gap-2 w-full justify-end">
                    <div className="flex justify-end">Total: £{totalCost} {Number(totalCost) > 0 && (<>inc. delivery</>)}</div>
                    <div className="flex gap-2 justify-end">
                        <Button variant="outline" onClick={onClose} className="w-full sm:w-auto">
                            Keep Browsing
                        </Button>
                        <Link to="/order">
                            <Button onClick={onClose} ref={checkoutBtnRef} className="w-full sm:w-auto">
                                Proceed to Checkout
                            </Button>
                        </Link>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}