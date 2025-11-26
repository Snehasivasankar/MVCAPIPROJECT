import { Component,OnInit,Input } from '@angular/core';
import { ConServiceService } from '../con-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-insert-db',
  templateUrl: './insert-db.component.html',
  styleUrls: ['./insert-db.component.css']
  
  
})
export class InsertDbComponent implements OnInit {
@Input() userData={Name:'',Age:0,mark:0};
constructor(public rest:ConServiceService,private router:Router){}
ngOnInit(): void {
  
}

addstudentdata(): void {
  this.rest.addWebApiTab(this.userData).subscribe(
    (result:any) => {
      console.log('Data inserted successfully:', result);
      this.router.navigate(['/AllDetails']);
    },
    (err:any) => {
      console.error('Error inserting data:', err);
      alert('Error saving data. Please check console for details.');
    }
  );
}
}
