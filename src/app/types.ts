export type Menu = {
    id: string;
    path: string;
    name: string;
    createdAt?: Date;
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
    model?: CompleteItem[];
    image: string;
    ram: string;
    type: string;
    processor: string;
    year: number;
    subtitle?: string;
    price?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type ProductParametr = {
    name: string;
    value: string | number;
}

export type CompleteItem = {
    id: string;
    name: string;
    createdAt?: Date;
}