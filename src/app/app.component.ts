import { Component, OnInit } from '@angular/core';
import { MockapiService } from './mockapi.service';
import { staffMember } from './interfaceStaff';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'StaffDetails';
  results : staffMember[] | undefined;
  constructor(private _mockapi : MockapiService){}
  ngOnInit(){
    this.getStaff()
    console.log(this.results)
  }

  
  getStaff(): boolean {
    this._mockapi.getStaffDetails().subscribe(
      staffData => {
        this.results=staffData;
        console.log(this.results);
      }
    )
    return false;
  }
}
