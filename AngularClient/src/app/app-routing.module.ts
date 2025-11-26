import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertDbComponent } from './insert-db/insert-db.component';
import { DisplayallComponent } from './displayall/displayall.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
 const routes:Routes= [
  {path:'',component:DisplayallComponent},
  {path:'insertdb',component:InsertDbComponent},
  {path:'AllDetails',component:DisplayallComponent},
   {path:'selectdetails/:id',component:DisplayDetailsComponent},
   {path:'editdetails/:id',component:EditDetailsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }