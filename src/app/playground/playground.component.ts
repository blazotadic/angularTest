import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html'
})
export class PlaygroundComponent implements OnInit {

  myInputValue: string = 'test-value';

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
      const queryParams = this.activatedRoute.snapshot.queryParams;
      console.log(queryParams);
  }

  printValue(): void {
    console.log(this.myInputValue);
  }

  changeValue(): void {
    this.myInputValue = 'changed-value!';
  }
}
