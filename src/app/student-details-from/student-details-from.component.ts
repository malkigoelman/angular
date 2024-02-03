import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student, Year } from '../models/student.modle';
import { APP_COURSE, Course } from '../models/course.modle';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'student-details-from',
  templateUrl: './student-details-from.component.html',
  styleUrls: ['./student-details-from.component.scss']
})
export class StudentDetailsFromComponent implements OnInit {


  private _student!: Student;
  courseList: Course[] = APP_COURSE;
  studyYear = Year;

  public get student(): Student | undefined {
    return this._student;
  }
  @Input()
  public set student(value: Student) {
    this._student = value;
    if (this.student) {
      this.studentFrom = new FormGroup({
        "id": new FormControl(this.student.id),
        "firstName": new FormControl(this.student.firstName, [Validators.required, Validators.minLength(2)]),
        "lastname": new FormControl(this.student.lastname, [Validators.required, Validators.minLength(2)]),
        "address": new FormControl(this.student.address, Validators.required),
        "phone": new FormControl(this.student.phone, Validators.required),
        "isActive": new FormControl(this.student.isActive),
        "avgMarks": new FormControl(this.student.avgMarks, [Validators.max(100), Validators.min(0), Validators.required]),
        "lastday": new FormControl(this.student.lastday),
        "courseId": new FormControl(this.student.courseId, Validators.required),
        "year": new FormControl(this.student.year, Validators.required)
      });
    }

  }
  @Output()
  onSaveNewStudent: EventEmitter<Student> = new EventEmitter();

  studentFrom: FormGroup = new FormGroup({});

  missingFromDate!: Date;
  missingDays?: number;

  totalMissingDays: number = 0;

  SaveNewStudent() {
    this.student = this.studentFrom.value;
    // if (this.missingDays && this.missingDays > 0 && this.missingFromDate)
    //   this.student?.abDay.push({
    //     fromDate: this.missingFromDate,
    //     totalDay: this.missingDays
    //   });
    this.onSaveNewStudent.emit(this.student);
  }

  total(): number {
    if (this.student?.id)
    return this._studentService.getSumById(this.student.id);
    return 0;
  }

  constructor(private _studentService: StudentService) { }
  ngOnInit(): void {
    this.totalMissingDays = this._studentService.getAverageById(1)
  }

}
