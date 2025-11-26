import { Component,OnInit,Input } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router';
import { ConServiceService } from '../con-service.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit{
@Input() studentData:any={name:'',age:0,mark:0};
id:number=0;
constructor(public rest:ConServiceService,private route:ActivatedRoute,private router:Router){}
ngOnInit(): void {
  let paramId=this.route.snapshot.paramMap.get("id");//query string
  if(paramId!==null && paramId!==undefined){
    this.id=+paramId;
  }
  this.rest.getWebApiTab(this.id).subscribe((data:{})=>{
    this.studentData=data;
  });
}
updateProduct():void{
  this.rest.updateWebApiTab(this.id,this.studentData).subscribe((result)=>{
    this.router.navigate(['/AllDetails/']);
  }, (err) =>{
    console.log(err);
  });

}
}
