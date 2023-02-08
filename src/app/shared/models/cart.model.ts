export interface CART {
    items: CARTITEM[];
}

export interface CARTITEM {
    url: string;
    height: number;
    quantity: number;
    id: string;
    breeds: any;
}
