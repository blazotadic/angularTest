import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Student } from "../models/student.model";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html'
})
export class StudentDetailComponent {

  @Input("student") student: Student;
  @Output("somethingHappenedInDetailComponent") eventEmitter = new EventEmitter<string>();

  constructor() { }

  notifyParentComponent(): void {
    this.eventEmitter.emit('something happened with student ' + this.student.firstName);
  }

}
