import { Component, Input, OnInit } from '@angular/core';
import { CART, CARTITEM } from '../../shared/models/cart.model';
import { CartService } from '../../shared/services/cart.service';

@Component({
    selector: 'sa-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    private _cart: CART = { items: [] };
    productQuantity: number = 0;
    @Input()
    get cart(): CART {
        return this._cart;
    }

    set cart (cart: CART) {
        this._cart = cart;
        this.productQuantity = cart.items
            .map((item) => item.quantity)
            .reduce((prev, current) => prev + current, 0);
    }

    constructor(private cartService: CartService) {
    }

    ngOnInit(): void {
    }

    getTotal(items: CARTITEM[]): number {
        return this.cartService.getTotal(items);
    }

}
