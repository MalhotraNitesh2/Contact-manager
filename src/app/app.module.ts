import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../Components/navbar/navbar.component';
import { ContactManagerComponent } from '../Components/contact-manager/contact-manager.component';
import { AddContactComponent } from '../Components/add-contact/add-contact.component';
import { EditContactComponent } from '../Components/edit-contact/edit-contact.component';
import { ViewContactComponent } from '../Components/view-contact/view-contact.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactManagerComponent,
    AddContactComponent,
    EditContactComponent,
    ViewContactComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
