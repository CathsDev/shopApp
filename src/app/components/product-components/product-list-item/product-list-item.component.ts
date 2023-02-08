import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CAT } from '../../../shared/models/cat.model';

@Component({
    selector: 'sa-product-list-item',
    templateUrl: './product-list-item.component.html',
    styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {

    @Input() cat: CAT | undefined;
    @Output() addToCart: EventEmitter<CAT> = new EventEmitter();
    name: string | undefined;

    constructor() {
    }

    ngOnInit(): void {
    }

    onAddToShoppingCart(): void {
        this.addToCart.emit(this.cat);
    }

}
