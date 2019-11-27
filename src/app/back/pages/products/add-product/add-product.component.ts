import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/products/api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  constructor(/*private formBuilder: FormBuilder,private router: Router, private userService: ApiService*/) {

  }
 // addForm: FormGroup;
 ngOnInit() {


 }

/*
 onSubmit() {
   this.userService.addProduct(this.addForm.value)
     .subscribe( data => {
       this.router.navigate(['back/products']);
     });
 }
 */
}
