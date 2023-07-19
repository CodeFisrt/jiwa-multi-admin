export class OrderObj {
    orderDate: Date;
    customerName: string;
    mobileNo: string;
    email: string;
    orderId: number;
    vendorId: number;
    customerId: number;
    totalAmount: number;
    paymentNaration: string;
    paymentId: string;
    isPaymentReceived: boolean;
    jiwaVendorOrderProducts: JiwaVendorOrderProduct[];
    shippingAddress: ShippingAddress;


    constructor() {
            this.orderDate = new Date,
            this.customerName = '',
            this.mobileNo = '',
            this.email = '',
            this.orderId = 0,
            this.vendorId = 0,
            this.customerId = 0,
            this.totalAmount = 0,
            this.paymentNaration = '',
            this.isPaymentReceived = false,
            this.paymentId = '',
            this.jiwaVendorOrderProducts = [],
            this.shippingAddress = new ShippingAddress();

    }
}

export interface JiwaVendorOrderProduct {
    productId: number;
    quantity: number;
    shortName: string;
    sku: string;
    productBasePrice: number;
    thumbnailImageUrl: string;
    isStockAvailable: boolean;
}

export class ShippingAddress {
    addressId: number;
    customerId: number;
    addressLine1: string;
    addressLine2: string;
    pin: string;
    addressTitle: string;
    city: string;
    state: string;
    phoneNo: string;
    isDefaultAddress: boolean;
    isActive: boolean;
    createdOn: string;

    constructor() {
        this.addressId = 0,
            this.customerId = 0,
            this.addressLine1 = '',
            this.addressLine2 = '',
            this.pin = '',
            this.addressTitle = '',
            this.city = '',
            this.state = '',
            this.phoneNo = '',
            this.isDefaultAddress = false,
            this.isActive = false,
            this.createdOn = ''
    }
}
