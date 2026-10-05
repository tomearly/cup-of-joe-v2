import { useRef } from "react"
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

import { useCart } from "@/context/cart";

export function CheckoutDrawer() {
    const checkoutBtnRef = useRef<HTMLButtonElement>(null);
    const {
        cartTotal,
        cart,
        checkoutDrawerOpen,
        activeProduct,
        closeCheckoutDrawer
    } = useCart();

    return (
        <Sheet open={checkoutDrawerOpen} onOpenChange={closeCheckoutDrawer}>
            <SheetContent side="right" className="w-[400px] sm:w-[540px] flex flex-col justify-between">
                <div>
                    <SheetHeader>
                        <SheetTitle>Review Your Order</SheetTitle>
                        {activeProduct && <SheetDescription>
                            You have added {activeProduct.name}
                        </SheetDescription>}
                    </SheetHeader>
                    <div className="space-y-4 border-t pt-4">
                        {cart.map(item => (
                            <div key={item.productId} className="flex justify-between items-center mb-0">
                                <div>
                                    <h4 className="px-4 font-medium text-lg">{item.name} * {item.quantity}</h4>
                                </div>
                                <p className="font-bold text-lg pr-5">£{item.price.toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <SheetFooter className="border-t pt-4 gap-2 w-full justify-end">
                    <div className="flex justify-end">Total: £{cartTotal} {Number(cartTotal) > 0 && (<>inc. delivery</>)}</div>
                    <div className="flex gap-2 justify-end">
                        <Link to="#">
                            <Button variant="outline" onClick={closeCheckoutDrawer} className="w-full sm:w-auto">
                                Keep Browsing
                            </Button>
                        </Link>
                        <Link to="/order">
                            <Button onClick={closeCheckoutDrawer} ref={checkoutBtnRef} className="w-full sm:w-auto">
                                Proceed to Checkout
                            </Button>
                        </Link>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}