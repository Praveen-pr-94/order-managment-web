import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {map, tap, take, exhaustMap, catchError} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
    providedIn : 'root'
})
export class ProductService {
    products: any[];
    constructor(private http: HttpClient){}

    getProductList(): any {
        return this.http.get(`${environment.baseUrl}/product`).pipe(
            catchError(async (error) => console.error(error)));
      }
      get userList(): any {
        return this.products.slice();
    }
}
