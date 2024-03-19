export class Customer {
    company: string;
    firstName: string;
    lastName: string;
    address: string;
    zipCode: number;
    city: string;
    email: string;

    constructor(obj?: any) {
        this.company = obj && obj.company || '';
        this.firstName = obj ? obj.firstName : "";
        this.lastName = obj ? obj.lastName : "";
        this.address = obj ? obj.address : "";
        this.zipCode = obj ? obj.zipCode : ""
        this.city = obj ? obj.city : "";
        this.email = obj ? obj.email : "";
    }
} 