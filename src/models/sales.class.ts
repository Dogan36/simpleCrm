export class Customer {
    customer: string;
    product: string;
    duration: number;
    user: string;
    description: string;
    
   

    constructor(obj?: any) {
        this.customer = obj && obj.customer || '';
        this.product = obj ? obj.product : "";
        this.duration = obj ? obj.duration : ""
        this.user = obj ? obj.user : "";
        this.description = obj ? obj.description : "";
    }
} 