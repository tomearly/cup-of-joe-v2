import { type OrderFormState } from "@/interfaces/OrderFormState"

export async function simulateOrderAction(
    prevState: OrderFormState | null,
    formData: FormData
) : Promise<OrderFormState> {

    const customerName = formData.get('customerName') as string || prevState?.customerName || ""
    const customerPhoneNumber = formData.get('customerPhoneNumber') as string || prevState?.customerPhoneNumber || ""

    if (!customerName || customerName.trim() === "") {
        return {
            success: false,
            message: "Please enter a name for the order!",
            customerPhoneNumber,
            customerName: ""
        }
    }

    if (!customerPhoneNumber || customerPhoneNumber.trim() === "") {
        return {
            success: false,
            message: "Please enter a phone number for the order!",
            customerPhoneNumber: "",
            customerName
        }
    }

    return {
        success: true,
        message: `Order received for: ${prevState?.customerName}. Phone Number: ${prevState?.customerPhoneNumber}`,
        orderId: `CAFE-${Math.floor(1000 + Math.random() * 9000)}`,
        customerPhoneNumber,
        customerName,
    }
}