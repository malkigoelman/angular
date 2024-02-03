import { Component, Input, OnInit } from '@angular/core';
import { Test } from '../models/test.modle';
import { StudentService } from '../student.service';


@Component({
  selector: 'test-history',
  templateUrl: './test-history.component.html',//יש כאן בעיה הכל כעת ירוק
  styleUrls: ['./test-history.component.scss']
})
export class TestHistoryComponent implements OnInit {

  ngOnInit(): void {
  }

  @Input()
  tests: Test[] | undefined;
  @Input()
  id!:number;

  avg():number{
    if(this.id)
    return this._studentService.getAverageById(this.id);
  return 0;
  }

  constructor(private _studentService:StudentService){}
}
