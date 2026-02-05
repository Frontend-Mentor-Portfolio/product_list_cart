export interface Image {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
}

export interface Product {
    name: string;
    category: string;
    price: number;
    image: Image;
}

export interface CartItem extends Product {
    quantity: number;
}
