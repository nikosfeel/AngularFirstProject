import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product/models';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() Product!:Product;
  Message!:string;
  UpdateProduct(){
    this.productService.updateProduct(this.Product).subscribe((data)=>this.Message = `Data Saved! ${this.Product.Name} with Price ${this.Product.Price}`);
  }

  ShowEditField:boolean = true;
  onShowEdit(){
    this.ShowEditField = !this.ShowEditField;
  }



  constructor(private productService:ProductService) { }
  
  ngOnInit(): void {
  }

}
