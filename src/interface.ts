export interface IProduct {
    title: string;
    price: number;
    id: string;
}

export interface ICart extends IProduct {
    amount: number;
} 