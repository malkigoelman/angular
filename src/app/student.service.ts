import { Injectable } from "@angular/core";
import { Student } from "./models/student.modle";
import { Observable } from "rxjs";
import {HttpClient} from "@angular/common/http"
//const STUDENTS: Student[] = []
    //     return [
    //         {id:1,firstName:"malki",lastname:"goelman",address:"aa 12",phone: 123,activ:true,AvgMark:90},
    //         {id:1,firstName:"sari",lastname:"goelman",address:"dfy g",phone: 456,activ:true},
    //         {id:1,firstName:"batya",lastname:"goelman",address:"nh 23",phone: 789,activ:false,AvgMark:95}        
    //     ]
 //   ;
@Injectable()
export class StudentService {

    // getStudentForServer():Promise<Student[]>{
    //     return new Promise(res=>{
    //         this._http.get("http://localhost:7028/swagger/index.html").subscribe(data=>{
    //             res(data);
    //         });
    //     })
    // }
    getStudentForServer(): Observable<Student[]>{
          return this._http.get<Student[]>("/api/student");
    }
    getStudentFromServerByISActiv(isActive:boolean):Observable<Student[]>{
        return this._http.get<Student[]>("/api/student/?isActiv="+isActive)
    }
    getStudentFromServerByName(name:string):Observable<Student[]>{
        return this._http.get<Student[]>("/api/student/?name="+name)
    }
    seveStudents(studentList:Student[]):Observable<boolean>{
        return this._http.post<boolean>("/api/student",studentList);
    }
    updateStudent(student:Student):Observable<boolean>{
        return this._http.put<boolean>("api/student/${student.ud}",student);
    }
    deleteStudent(id:number):Observable<boolean>{
        return this._http.delete<boolean>("api/student/"+id);
    }
    // getStudent(): Student[] {
    //     return STUDENTS;
    // }
    // getStudentSlowly(): Promise<Student[]> {
    //     return new Promise((res, rej) => {
    //         setTimeout(() => { res(STUDENTS) }, 5000);
    //     })
    // }
    getAverageById(id: number) {
        return STUDENTS.filter(x => x.id == id)[0].avgMarks;
    }

    getSumById(id: number) {
        let st = STUDENTS.filter(x => x.id == id)[0];
        let sum = 0;
        // for (const ab of Student.adDays)
            // sum += ab.totalDays;
        return sum;
    }
    constructor(private _http:HttpClient) {

        // STUDENTS[0].id=1;
        // STUDENTS[1].id=2;
        // STUDENTS[2].id=3;
        // STUDENTS[0].quizes

    }
}