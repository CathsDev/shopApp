import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const STORE_BASE_URL = 'https://api.thecatapi.com';
// const STORE_BASE_URL = 'https://fakestoreapi.com';

@Injectable({
    providedIn: 'root'
})
export class StoreService {

    constructor(private httpClient: HttpClient) {
    }

    getAllCats() {
        return this.httpClient.get(
            `${STORE_BASE_URL}/v1/images/search?limit=10&breed_ids=beng&api_key=live_YO7OCMPbJmTXKDPr7Uinb09YfRiojO8lefJx3MtPSE2w7DOHvWMhnDh8CS49rOYE`);
    }

    getSingleCat(id: string): Observable<any> {
        return this.httpClient.get(
            `${STORE_BASE_URL}/v1/images/${id}`)
    }
}
