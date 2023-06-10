import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  studentsList = [ 'Ammu','Anju','Athi'];
 selectedstudent(data: string) {
  debugger;
  alert(data);
}

}
