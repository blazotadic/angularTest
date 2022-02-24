import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { debounceTime, switchMap, takeUntil } from "rxjs/operators";
import { ProductService } from "./product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  productSearchForm: FormGroup;
  products: any[] = [];
  page: number = 0;
  size: number = 3;

  constructor(
    private productService: ProductService
  ) { }

  loadMore() : void{
    this.page++;
    const value = this.productSearchForm.get('searchTerm').value
    this.productService.searchByTermPageable(value, this.page, this.size)
    .pipe().subscribe(data => {
      this.products = data;
    }, error => {
      console.log(error);
    });

  }


  ngOnInit(): void {
    this.initializeForm();

    this.productSearchForm.get('searchTerm').valueChanges
      .pipe(
        debounceTime(1000),
        switchMap((value: string) => {
          this.page = 0;
          return this.productService.searchByTermPageable(value, this.page, this.size);
          //return this.productService.searchByTerm(value);
        })
      ).subscribe(data => {
        this.products = data;
      }, error => {
        console.log(error);
         //this.products = [];
      });

  }

  ngOndestroy() : void {
    //unsubscribe-Nijesam uspio da uradim
    this.page = 0;
    this.products = [];
  }

  private initializeForm(): void {
    this.productSearchForm = new FormGroup({
      searchTerm: new FormControl(null)
    });
  }
}

