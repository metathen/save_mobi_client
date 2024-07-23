export type Menu = {
    id: string;
    path: string;
    name: string;
}

export type ServiceItem = {
    id: string;
    title: string;
    subtitle?: string;
    price?: string;
    image: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type ProductItem = {
    id: string;
    title: string;
    image: string;
    subtitle?: string;
    price?: string;
    createdAt?: Date;
    updatedAt?: Date;
}