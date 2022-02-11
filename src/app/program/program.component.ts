import { Component, OnInit } from "@angular/core";
import { StudentService } from "../shared/student.service";
import { Student } from "../student/models/student.model";

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html'
})
export class ProgramComponent implements OnInit {

  student: Student;

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
      this.studentService.emitter.subscribe(data => {
        console.log(data);
        this.student = data;
      });
  }
}
