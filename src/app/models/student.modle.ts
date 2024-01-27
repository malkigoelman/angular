import { Test } from "./test.modle";

export class Student{
    static const:number=0;
    public id!:number;
    public firstName!:string;
    public lastname!:string;
    public address!:string;
    public phone!:string;
    public isActive!:string;
    public avgMarks!:number;
    public lastday!:Date;
    public courseId!:number;
    public year!:Year;
    public test!:Test[];
    // public

    constructor(firstName?:string,lastname?:string,address?:string,phone?:string,isActive?:string,avgMarks?:number){
        this.id=0;
        this.firstName=firstName|| "new";
        this.lastname=lastname||"student";
        this.address=address||"Israel bney brak";
        this.phone=phone||"0361666161";
        this.isActive=isActive||"false";
        this.avgMarks=avgMarks||70;
        this.lastday=new Date();
        this.test=[{"id":100,"date":new Date(),"description":"taes 1","mark":85}]
    }
}

export enum Year{
    First=1,
    Second=2,
    Third=3
}