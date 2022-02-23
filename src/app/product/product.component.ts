import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { debounceTime, switchMap } from "rxjs/operators";
import { ProductService } from "./product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  productSearchForm: FormGroup;
  products: any[] = [];

  constructor(
    private productService: ProductService
  ) { }


  ngOnInit(): void {
    this.initializeForm();

    this.productSearchForm.get('searchTerm').valueChanges
      .pipe(
        debounceTime(1000),
        switchMap((value: string) => {
          return this.productService.searchByTerm(value);
        })
      ).subscribe(data => {
        this.products = data;
      }, error => {
        console.log(error);
        // this.products = [];
      });
  }

  private initializeForm(): void {
    this.productSearchForm = new FormGroup({
      searchTerm: new FormControl(null)
    });
  }
}
