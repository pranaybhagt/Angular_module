import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  totalBookingsCount:number=0
  constructor(private shared:SharedService){

  }
  ngOnInit(){
    console.log("Header Component");
    this.shared.bookingCntSub$.subscribe((data:any)=>{
      console.log("Data received successfully", data);
      this.totalBookingsCount = data
      
    })
    
  }

}
