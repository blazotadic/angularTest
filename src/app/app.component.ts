import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'academy2022';
  showParagraph: boolean = false;
  hasActiveClass: boolean = true;

  constructor() { }


  handleClick(): void {
    console.log('Clicked!');
  }

  toggleActiveClass(): void {
    this.hasActiveClass = !this.hasActiveClass;
  }

}
