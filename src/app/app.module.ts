import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetaisComponent } from './student-details/student-details.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StudentDetailsFromComponent } from './student-details-from/student-details-from.component';
import { StudentService } from "./student.service";
import { TestHistoryComponent } from './test-history/TestHistoryComponent';
import { ObservableComponent } from './observable/observable.component';


@NgModule({
    declarations: [AppComponent, StudentsComponent, StudentDetaisComponent, StudentDetailsFromComponent, TestHistoryComponent, ObservableComponent],
    imports: [BrowserModule, FormsModule,ReactiveFormsModule],
    providers:[StudentService],
    bootstrap: [AppComponent]
})
export class AppModule {

}