import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../models/student.modle';

@Component({
  selector: 'student-detais',
  templateUrl: './student-details.component.html'
})
export class StudentDetaisComponent  implements OnInit{

  @Input()
  student?:Student;

  @Output()
  onSaveNewStudent:  EventEmitter<Student>=new EventEmitter();

  SaveNewStudent(){
    this.onSaveNewStudent.emit(this.student);
  }
  // @Output()
  // onFirstFocus: EventEmitter<any>=new EventEmitter;
  // firstFocusEmitted:boolean=false;
  // inputfocus(){
  //   if(!this.firstFocusEmitted)
  //   this.onFirstFocus.emit();
  //   this.firstFocusEmitted=true;
  // }
  constructor(){}
  ngOnInit(): void {
    
  }


}
