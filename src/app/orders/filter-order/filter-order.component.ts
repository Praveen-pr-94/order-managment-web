import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-filter-order',
  templateUrl: './filter-order.component.html',
  styleUrls: ['./filter-order.component.css']
})
export class FilterOrderComponent implements OnInit {

  constructor( private orderService: OrderService) { }

  ngOnInit(): void {
  }

  searchOrder(): any {
   const searchText = ( document.getElementById('seachElm') as HTMLInputElement).value;
   console.log(searchText)
   this.orderService.searchOrdersList(searchText);
  }
}
