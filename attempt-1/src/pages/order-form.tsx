import { useActionState } from "react";
import { simulateOrderAction } from "@/actions/order-action";
import { type OrderFormState } from "@/interfaces/OrderFormState";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader, CheckCircle2, AlertCircle } from "lucide-react";

const initialState: OrderFormState = {
  success: false,
  message: "",
  customerName: "",
  customerPhoneNumber: "",
};

export function OrderForm() {
  const [state, formAction, isPending] = useActionState(simulateOrderAction, initialState);

  return (
    <div className="max-w-md mx-auto p-6 border rounded-xl shadow-sm bg-card space-y-6">
      <div>
        <h2 className="text-xl font-bold">Complete your order</h2>
      </div>

      <form action={formAction} className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="customerName">Customer Name</Label>
          <Input 
            id="customerName" 
            name="customerName" 
            placeholder="e.g., Alex" 
            disabled={isPending}
            defaultValue={state.customerName}
            onChange={(e) => state.customerName = e.target.value}
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="customerNumber">Customer Phone Number</Label>
          <Input 
            id="customerPhoneNumber" 
            name="customerPhoneNumber" 
            placeholder="e.g. 07000 123456"
            disabled={isPending}
            defaultValue={state.customerPhoneNumber}
            onChange={(e) => state.customerPhoneNumber = e.target.value}
          />
        </div>

        <Button 
          type="submit" 
          disabled={isPending || !!state.orderId} 
          className="w-full text-white flex items-center justify-center gap-2"
        >
          {isPending ? (
            <>
              <Loader className="h-4 w-4 animate-spin" />
              Sending Order
            </>
          ) : (
            "Complete Order"
          )}
        </Button>
      </form>

      {state.message && (
        <Alert variant={state.success ? "default" : "destructive"} className={state.success ? "border-emerald-500 bg-emerald-50/50" : ""}>
          {state.success ? (
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
          ) : (
            <AlertCircle className="h-4 w-4" />
          )}
          <AlertTitle className={state.success ? "text-emerald-800 font-bold" : ""}>
            {state.success ? `Success: ${state.orderId}` : "Please check all fields"}
          </AlertTitle>
          <AlertDescription className={state.success ? "text-emerald-700" : ""}>
            {state.message}
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}