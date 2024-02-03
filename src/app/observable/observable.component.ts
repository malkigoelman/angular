import { Component, OnInit } from '@angular/core';
import { Observable, interval, map, observeOn } from 'rxjs';
import { Student } from '../models/student.modle';
import { NgFor } from '@angular/common';
import { Data } from '@angular/router';

@Component({
  selector: 'observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit{

  source:Observable<string>=new Observable((observeOn)=>{
    observeOn.next(Student.name);

    observeOn.error("ERROR");
  });
  timervalue!:string;
  timer:Observable<Date>=new Observable(ob=>{
    setInterval(()=>{
      ob.next(new Date());
    },1000);
  });
  timerOperator:Observable<Data>=interval(1000).pipe(map(x=>{return new Date()}));

  str!:string;
  constructor(){
    this.source.pipe(map(x=>{return x+"jj"})).subscribe((value:string)=>{
      this.str=value;
      console.log(value)
    },
    (err)=>{this.str="kkk"; console.log(err)},
    ()=>{
      this.str=" ";
    });
    this.timer.subscribe((v)=>{
      this.timervalue=v.toLocaleTimeString();
    })  }
  ngOnInit(): void {
    
  }
}
