import { EventEmitter, Injectable } from "@angular/core";
import { Student } from "../student/models/student.model";

@Injectable()
export class StudentService {

  emitter = new EventEmitter<any>();

  publish(student: Student): void {
    this.emitter.emit(student);
  }
}
