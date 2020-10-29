import { OrderService } from './../../services/order.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from 'src/app/models/users.model';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  addOrderForm: FormGroup;
  users: any[];
  product: any[];
  constructor(private fb: FormBuilder , private userService: UserService , private productService: ProductService,
              private orderService: OrderService) {}

  ngOnInit(): void {
    this.addOrderForm = this.fb.group({
      user: ['', Validators.required],
      product: ['', Validators.required],
      quantity: ['', Validators.required],
    });
    this.listUsers();
    this.listProducts();
  }

  addOrder(): any{
    if (this.addOrderForm.valid){
      this.orderService.createOrder(this.addOrderForm.value)
    } else {
      alert('Form not valid');
    }
  }

  listUsers(): any{
    this.userService.getUsersList().subscribe((data: any) => {
      if (data.status) {
        this.users = data.data;
      }
    });
  }

  listProducts(): any{
    this.productService.getProductList().subscribe((data: any) => {
      if (data.status) {
        this.product = data.data;
      }
    });
  }

}
