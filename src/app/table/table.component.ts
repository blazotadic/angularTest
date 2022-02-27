import { Component, Input, OnInit } from "@angular/core";
import { ColumnData } from "./column-data.module";
import { Employee } from "./employee.model";

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html'
  })
  export class TableComponent implements OnInit {

    @Input() columnData: ColumnData;
    @Input() dataTable: Employee[];

    Pages: Array<number>;
    mainData: Employee[];
    page: number = 0;//stranica koja se prikazuje
    interval: number = 5;//po koliko redova se prikazuje u tabeli

    ngOnInit(): void {
       this.Pages = Array.from({length: Math.ceil(this.dataTable.length / 5.0)}, (_, i) => i + 1);
       //Math.ceil(this.data.length / 5.0) ukupan broj dijelim sa 5 i zaokruzujem na veci broj. Na kraju dobijem [1,2,3,...]

      this.mainData = this.dataTable.slice(this.page, this.page + 5);

    }

    pageNumber(page: number){
      this.page=page-1;//jer krece od 1 a stranicenje mi je od 0
      this.mainData = this.dataTable.slice(this.page * this.interval, this.page * this.interval + this.interval);
    }

    pageBefore(): void{
      if(this.page > 0){
        this.page = this.page - 1;
        this.mainData = this.dataTable.slice(this.page * this.interval, this.page * this.interval + this.interval);
      }
    }

    pageNext(): void{
      if(this.page <  (Math.ceil(this.dataTable.length / 5.0) - 1) ){//ako je trenutna stranica manja od maksimalne dozvoljene, -1 zbog indeksa
        this.page = this.page + 1;
        this.mainData = this.dataTable.slice(this.page * this.interval, this.page * this.interval + this.interval);
      }
    }

  }