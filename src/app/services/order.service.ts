import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {map, tap, take, exhaustMap, catchError} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
    providedIn : 'root'
})
export class OrderService{
    orders: any[];
    newOrder = new Subject<any[]>();
    constructor(private http: HttpClient){}

    getOrdersList(): any {
        return this.http.get(`${environment.baseUrl}/order`).pipe(
          catchError(async (error) => console.error(error))).subscribe((data: any) => {
            if (data.status) {
              this.orders = data.data;
              this.newOrder.next(this.orders.slice());
            }
          });
      }

      searchOrdersList(searchText: string): any {
        return this.http.get(`${environment.baseUrl}/order?search=${searchText}`).pipe(
          catchError(async (error) => console.error(error))).subscribe((data: any) => {
            if (data.status) {
              this.orders = data.data;
              this.newOrder.next(this.orders.slice());
            }
          });
      }

    getHeader(): any {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return headers;
      }

      createOrder(json: any): any {
        return this.http
          .post(
            `${environment.baseUrl}/order`,
            json,
            { headers: this.getHeader(), responseType: 'json' }
          )
          .pipe(
            map(data => {
              return data;
            }),
            catchError(async(error: any) => {
              console.error(error)
            })
          ).subscribe((res) => {
            alert('success')
            this.getOrdersList();
        }, (err) => {}, () => {});
      }

      deleteOrder(id: string): any{
        return this.http.delete(`${environment.baseUrl}/order/${id}`).pipe(
            catchError(async (error) => console.error(error)));
      }
}
