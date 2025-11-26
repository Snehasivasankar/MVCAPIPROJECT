import { Component,OnInit } from '@angular/core';
import { ConServiceService,WebApiTab } from '../con-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displayall',
  templateUrl: './displayall.component.html',
  styleUrls: ['./displayall.component.css']
})
export class DisplayallComponent implements OnInit{

  Getdata:WebApiTab[]=[];
  constructor(public details:ConServiceService,private router:Router){}
  ngOnInit(): void {
    console.log("DisplayallComponent loaded");  
    this.GetAllDetails();
  }
  GetAllDetails(): void {
  this.details.getAllWebApiTabs().subscribe({
    next: (resp: any) => {
      console.log("API Response:", resp);
      this.Getdata = resp;
    },
    error: (err) => {
      console.error("API error:", err);
    }
  });
}
delete(id:number):void{
  this.details.deleteWebApiTab(id)
  .subscribe(()=>{
    this.GetAllDetails();
  },(err)=>{
    console.log(err);
  }
  );
}

}
