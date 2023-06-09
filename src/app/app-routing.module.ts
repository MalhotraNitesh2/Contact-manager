import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from '../Components/add-contact/add-contact.component';
import { ContactManagerComponent } from '../Components/contact-manager/contact-manager.component';
import { EditContactComponent } from '../Components/edit-contact/edit-contact.component';
import { ViewContactComponent } from '../Components/view-contact/view-contact.component';

const routes: Routes = [
  {path:'',redirectTo:'contacts/admin',pathMatch:'full'},
  {path:'contacts/admin',component:ContactManagerComponent},
  {path:'contacts/add',component:AddContactComponent},
  {path:'contacts/edit/:contactId',component:EditContactComponent},
  {path:'contacts/view/:contactId',component:ViewContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
