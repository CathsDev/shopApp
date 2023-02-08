import { Injectable } from '@angular/core';
import { CART, CARTITEM } from '../models/cart.model';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    cart = new BehaviorSubject<CART>({ items: [] });

    constructor(private _snackbar: MatSnackBar) {
    }

    addToCart(item: CARTITEM): void {
        const items = [...this.cart.value.items];

        const itemInCart = items.find((_item) => _item.id === item.id);
        
        if (itemInCart) {
            itemInCart.quantity += 1;
        } else {
            items.push(item);
        }

        this.cart.next({ items });
        this._snackbar.open('1 Katze ins Körbchen gelegt', 'Ok', { duration: 3000 });
    }

    getTotal(items: CARTITEM[]): number {
        return items
            .map((item) => item.height * item.quantity)
            .reduce((acc, value) => acc + value, 0);
    }

    clearCart(): void {
        this.cart.next({ items: []} );
        this._snackbar.open('Einträge wurden gelöscht', 'OK',
            {duration: 3000}
        );
    }

    removeFromCart(item: CARTITEM, update = true): CARTITEM[] {
        const filteredItem = this.cart.value.items.filter(
            (_item) => _item.id !== item.id
        );
        if (update) {
            this.cart.next({ items: filteredItem });
            this._snackbar.open('Eintrag wurde gelöscht', 'OK',
                {duration: 3000}
            );
        }
        return filteredItem;
    }

    removeQuantity(item: CARTITEM): void {
        let itemForRemoval!: CARTITEM;

        let filteredItems = this.cart.value.items.map((_item) => {
            if (_item.id === item.id) {
                _item.quantity--;
                if (_item.quantity === 0) {
                    itemForRemoval = _item;
                }
            }
            return _item;
        });

        if (itemForRemoval) {
            filteredItems = this.removeFromCart(itemForRemoval, false);
        }

        this.cart.next({ items: filteredItems });
        this._snackbar.open('Die Anzahl wurde verringert', 'OK',
            {duration: 3000}
        );
    }

}
