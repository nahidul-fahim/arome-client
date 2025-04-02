export interface IProduct {
    id: string;
    name: string;
    image: string;
    price: number;
    originalPrice: number;
    brand: string;
    category: string;
    description: string;
    isNew: boolean;
    isSale: boolean;
    reviewCount: number;
    rating: number;
}
