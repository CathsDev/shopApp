import { Component, OnInit } from '@angular/core';

import { CART, CARTITEM } from '../../shared/models/cart.model';
import { CartService } from '../../shared/services/cart.service';

@Component({
    selector: 'sa-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

    cart: CART = { items: [] };
    dataSource: CARTITEM[] = [];

    displayedColumns: Array<string> = [
        'url',
        'price',
        'quantity',
        'total',
        'action'
    ];

    constructor(private cartService: CartService) {
    }

    ngOnInit(): void {
        this.cartService.cart.subscribe((_cart) => {
            this.cart = _cart;
            this.dataSource = _cart.items;
        });
    }

    getTotal(items: CARTITEM[]): number {
        return this.cartService.getTotal(items);
    }

    onClearShoppingCart(): void {
        this.cartService.clearCart();
    }

    onRemoveFromCart(item: CARTITEM): void {
        this.cartService.removeFromCart(item);
    }

    onAddQuantity(item: CARTITEM): void {
        this.cartService.addToCart(item);
    }

    onRemoveQuantity(item: CARTITEM): void {
        this.cartService.removeQuantity(item);
    }

}
