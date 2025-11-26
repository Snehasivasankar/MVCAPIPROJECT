import { Component,OnInit } from '@angular/core';
import { ConServiceService, WebApiTab } from '../con-service.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit{
  student:WebApiTab|undefined;
  id:number=0;
  constructor(public rest:ConServiceService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    var paramId=this.route.snapshot.paramMap.get("id");//id get from query string or Url
    if(paramId!==null && paramId!==undefined){
      this.id=+paramId
    }
    this.rest.getWebApiTab(this.id).subscribe(
      (data:WebApiTab)=>this.student={...data}
    
    );
  }

}
