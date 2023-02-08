import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CAT } from '../../../shared/models/cat.model';
import { StoreService } from '../../../shared/services/store.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'sa-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnDestroy, OnInit {

    cat: CAT | undefined;
    breeds: any;
    catSubcription: Subscription | undefined;
    @Output() addToCart = new EventEmitter();

    constructor(private route: ActivatedRoute,
                private storeService: StoreService) {
    }

    ngOnInit(): void {
        const params = this.route.snapshot.paramMap;
        this.storeService.getSingleCat(params.get('id') || '')
            .subscribe(_singleCat => {
                this.cat = _singleCat;
                this.breeds = _singleCat.breeds[0];
        });
    }

    ngOnDestroy(): void {
        if (this.catSubcription) {
            this.catSubcription.unsubscribe();
        }
    }

}
