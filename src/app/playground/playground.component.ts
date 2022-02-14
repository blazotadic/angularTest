import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html'
})
export class PlaygroundComponent implements OnInit {

  myInputValue: string = 'test-value';
  allowEdit: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
      const queryParams = this.activatedRoute.snapshot.queryParams;
      const data = this.activatedRoute.snapshot.data;

      this.allowEdit = data.allowEdit;

      // console.log(queryParams);
      console.log(data);
  }

  printValue(): void {
    console.log(this.myInputValue);
  }

  changeValue(): void {
    this.myInputValue = 'changed-value!';
  }
}
