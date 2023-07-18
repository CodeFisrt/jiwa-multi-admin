export interface Order {
    customerId: number;
    orderId: number;
    orderDate: string;
    totalAmount: number;
    isPaymentReceived: boolean;
    firstName: string;
    lastName: string;
    vendorName: string;
    mobileNo: string;
    email: string;
}
