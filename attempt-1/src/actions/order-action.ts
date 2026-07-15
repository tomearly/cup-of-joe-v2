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

    // Validate phone number format (simple regex for demonstration)
    const phoneRegex = /^\+?\d{10,15}$/; // Accepts optional '+' and 10 to 15 digits
    if (!phoneRegex.test(customerPhoneNumber)) {
        return {
            success: false,
            message: "Please enter a valid phone number (10-15 digits, optional '+')!",
            customerPhoneNumber: "",
            customerName
        }
    }

    return {
        success: true,
        message: `Order received for: ${customerName}. Phone Number: ${customerPhoneNumber}`,
        orderId: `CAFE-${Math.floor(1000 + Math.random() * 9000)}`,
        customerPhoneNumber,
        customerName,
    }
}