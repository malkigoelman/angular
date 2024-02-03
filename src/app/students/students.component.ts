import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../models/student.modle';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
})
export class StudentsComponent implements OnInit {

  students: Student[] = [];
  selectedStudent: Student | undefined;

  listStudent: Student[] = this._studentService.getStudent();

  @Output()
  focusStudent: EventEmitter<Student> = new EventEmitter();

  onFousStudent(student: Student) {
    this.selectedStudent = student;
    this.focusStudent.emit(this.selectedStudent);
  }

  addNewStudent() {
    this.selectedStudent = new Student();
  }

  saveToList(student: Student) {
    if (student.id == 0) {
      student.id = this.students.length + 1;
      this.students.push(student);
    }
    else {
      let Update = this.students.filter(x => x.id == student.id)[0];
      let index = this.students.indexOf(Update);
      this.students[index] = student;
    }
    alert("add seccesfully");
    this.selectedStudent = undefined;
  }


  // listStudent: Student[] = [
  //   {id:1,f_name:"malki",l_name:"goelman",address:"aa 12",phon: 123,activ:true,AvgMark:90},
  //   {id:1,f_name:"sari",l_name:"goelman",address:"dfy g",phon: 456,activ:true},
  //   {id:1,f_name:"batya",l_name:"goelman",address:"nh 23",phon: 789,activ:false,AvgMark:95}
  // ];


  deleteStudent(student: Student) {
    let indexToDelete = this.listStudent.indexOf(student);
    this.listStudent.splice(indexToDelete, 1);
  }

  showDetails(student: Student) {
    this.selectedStudent = student;
  }
  total(student: Student): number {
    if (student.id)
    return this._studentService.getSumById(student.id);
    return 0;
  }
  constructor(private _studentService: StudentService) {
    _studentService.getStudentForServer().subscribe(data=>{this.students=data;});
    }
    showStudentByIsActiv(isActiv:boolean){
      this._studentService.getStudentFromServerByISActiv(isActiv).subscribe(data=>this.students=data);//צריך להיות שווה למישהו אחר
    }
    saveStudentToServer(){
      this._studentService.seveStudents(this.students).subscribe(d=>{
        if(d)
        alert("save seccess");
      },err=>{alert(err);});
    }
  ngOnInit(): void {
   // this._studentService=getStudentSlowly().then(x=>{this.students=x});
   }
}
