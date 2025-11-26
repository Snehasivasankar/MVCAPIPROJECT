import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';   // ✅ MUST be imported
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertDbComponent } from './insert-db/insert-db.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayallComponent } from './displayall/displayall.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertDbComponent,
    DisplayallComponent,
    DisplayDetailsComponent,
    EditDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule   // ✅ MUST be in imports[]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }