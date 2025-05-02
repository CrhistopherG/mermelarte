export interface Product {
    id: number;
    name: string;
    image: string;
    size: string;
    price: string;
  }
  
  export interface OrderFormData {
    name: string;
    email: string;
    address: string;
    quantity: number;
  }

  export interface Member {
    name: string,
    career: string,
    image: string
  }