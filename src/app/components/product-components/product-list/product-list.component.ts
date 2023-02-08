import {Component, OnDestroy, OnInit} from '@angular/core';

import { CAT } from '../../../shared/models/cat.model';
import { CartService } from '../../../shared/services/cart.service';
import { StoreService } from '../../../shared/services/store.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'sa-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnDestroy, OnInit {

    cats: any;
    catsSubcription: Subscription | undefined;

    constructor(private cartService: CartService,
                private storeService: StoreService) {
    }

    ngOnInit(): void {
        this.getAllCats();
    }

    getAllCats(): void {
        this.storeService.getAllCats()
            .subscribe(_cats => {
                this.cats = _cats;
            });
    }

    onAddToCart(cat: CAT): void {
        this.cartService.addToCart({
            url: cat.url,
            height: cat.height,
            quantity: 1,
            id: cat.id,
            breeds: cat.breeds
        });

    }

    ngOnDestroy(): void {
        if (this.catsSubcription) {
            this.catsSubcription.unsubscribe();
        }
    }

}
