import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit, OnDestroy {
  orders: any[];
  private subsription: Subscription;
  constructor( private orderService: OrderService) {
    this.listOrders();
   }

   ngOnInit(): void {
    this.subsription = this.orderService.newOrder.subscribe((data)=>{
      this.orders = data;
    });
  }

  ngOnDestroy(): void{
    this.subsription.unsubscribe();
  }

  listOrders(): any{
    this.orderService.getOrdersList();
  }
  editOrder(id: string): any {

  }

  deleteOrder(id: string): any{
    this.orderService.deleteOrder(id).subscribe((data: any) => {
      if (data.status) {
        this.listOrders();
      }
    });
  }
}
