import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Module-Practice1';
  msg:string="pranay";
   
  subject = new Subject();
  ngOnInit(){

    this.subject.next(10);
    this.subject.next(20);

    this.subject.subscribe((data:any)=>{
      console.log("Data Received",data);
      
    })
  }
}
