import { Injectable } from "@angular/core";
import { Student } from "./task.model";


@Injectable()
export class StudentService{

    getStudents(): Student[]{
        return [
            {id:1,f_name:"malki",l_name:"goelman",address:"aa 12",phon: 123,activ:true,AvgMark:90},
            {id:1,f_name:"sari",l_name:"goelman",address:"dfy g",phon: 456,activ:true},
            {id:1,f_name:"batya",l_name:"goelman",address:"nh 23",phon: 789,activ:false,AvgMark:95}        
        ]
    };

    getStudentSlowly(): Promise<Student[]>{
        return new Promise((res,rej)=>{
            setTimeout(() => {
                // res();
            }, 5000);
        })
    }
    getValue():Promise<number>{
        return new Promise((reslove,reject)=>{
            reslove(1);
            // reject("no number found");
        })
    }

    callFunc(){
       var x:number;
        this.getValue().then((value)=>{
            x=value;
       }).catch(err=>{
        x=0;
       })
        console.log("after call getvalue");
    }
    constructor(){
        this.callFunc();
    }
}