import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StudentService } from '../student.service';
import {Priority, Student} from "../task.model";

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
})
export class StudentsComponent implements OnInit{

  priority=Priority;



  // listStudent: Student[] = [
  //   {id:1,f_name:"malki",l_name:"goelman",address:"aa 12",phon: 123,activ:true,AvgMark:90},
  //   {id:1,f_name:"sari",l_name:"goelman",address:"dfy g",phon: 456,activ:true},
  //   {id:1,f_name:"batya",l_name:"goelman",address:"nh 23",phon: 789,activ:false,AvgMark:95}
  // ];

  listStudent:Student[]=this._studentService.getStudents();
  @Output()
  onSaveStudent :EventEmitter<Student>=new EventEmitter<Student>();

  deleteStudent(student: Student) {
    let indexToDelete = this.listStudent.indexOf(student);
    this.listStudent.splice(indexToDelete, 1);
  }
  selectedStudent?:Student;

  showDetails(student:Student){
    this.selectedStudent = student;
  }
  showNewStudentDetails(){
    // this.selectedStudent=new Student(id:0,f_name:"",l_name:"",address:"",phon: 0,activ:true);
  }
  //@Output() newItemValue = new EventEmitter<Student>();
  saveStudentToList(studentToSave:Student){ 
    this.onSaveStudent.emit(studentToSave)
    if(studentToSave.id==0){
      studentToSave.id=this.listStudent.length+1;
      this.listStudent.push(studentToSave);
    }
    else{
        let studentToUpdate=this.listStudent.filter(x=>x.id==studentToSave.id)[0];
        let index=this.listStudent.indexOf(studentToUpdate);
        this.listStudent[index]=studentToSave;
    }
  
      // this.selectedStudent= null;
  }
  addNewStudentToList2(){
    alert("save new Student");
  }
  showHelp(){
    alert("you need help?");
  }
  showAdv(){
    alert("show");
  }
  bntClick(e:any){

  }
  constructor(private _studentService: StudentService){
    _studentService.getStudentSlowly().then(listStudent=>{
    })
  }
  ngOnInit():void{}
}
