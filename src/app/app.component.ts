import { Component, OnInit } from '@angular/core';
import { CART } from './shared/models/cart.model';
import { CartService } from './shared/services/cart.service';

@Component({
    selector: 'sa-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

    cart: CART = { items: [] };

    constructor(private cartService: CartService) {
    }

    ngOnInit(): void {
        this.cartService.cart.subscribe((_cart) => {
            this.cart = _cart;
        });
    }

}
