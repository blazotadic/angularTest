import { Component } from "@angular/core";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html'
})
export class PlaygroundComponent {

  myInputValue: string = 'test-value';


  printValue(): void {
    console.log(this.myInputValue);
  }

  changeValue(): void {
    this.myInputValue = 'changed-value!';
  }
}
