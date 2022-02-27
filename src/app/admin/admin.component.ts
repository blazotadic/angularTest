import { Component, OnInit } from "@angular/core";
import { ColumnData } from "../table/column-data.module";
import { Employee } from "../table/employee.model";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {

  constructor() { }

  tableEmployee: boolean = false;
  btnName: string= "View employee table";
  columnData: ColumnData;
  dataTable: Employee[] ;

  ngOnInit(): void {
    this.getColumnData();
    this.getDataTable();
  }
  
getColumnData(): void{
  //podaci si tu radi demonstracije
 this.columnData = new ColumnData('First name', 'Last name', 'Username', 'Is active?', 'Actions') ;
}

getDataTable():void{
  //podaci si tu radi demonstracije
  this.dataTable = [
    new Employee('marko1', 'markovic1', 'marko1@gmail.com', false,'Actions'),
    new Employee('marko2', 'markovic2', 'marko2@gmail.com', true,'Actions'),
    new Employee('marko3', 'markovic3', 'marko3@gmail.com', false,'Actions'),
    new Employee('marko4', 'markovic4', 'marko4@gmail.com', false,'Actions'),
    new Employee('marko5', 'markovic5', 'marko5@gmail.com', true,'Actions'),
    new Employee('marko6', 'markovic6', 'marko6@gmail.com', true,'Actions'),
    new Employee('marko7', 'markovic7', 'marko7@gmail.com', false,'Actions'),
    new Employee('marko8', 'markovic8', 'marko8@gmail.com', false,'Actions'),
    new Employee('marko9', 'markovic9', 'marko9@gmail.com', true,'Actions'),
    new Employee('marko10', 'markovic10', 'marko10@gmail.com', true,'Actions'),
    new Employee('marko11', 'markovic11', 'marko11@gmail.com', true,'Actions'),
    new Employee('marko12', 'markovic12', 'marko12@gmail.com', false,'Actions'),
    new Employee('marko13', 'markovic13', 'marko13@gmail.com', true,'Actions')
] ;
}

  getTableEmployee(): void{
    if(this.tableEmployee) this.btnName= "View employee table"
    else this.btnName= "To hint employee table"
    this.tableEmployee = !this.tableEmployee
  }

}
