import { Component, OnInit } from '@angular/core';
import { Icontact } from 'models/Icontact';
import { Contactservice } from 'src/Services/contact.Service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {
  public loading:boolean=false;
  public contacts:Icontact[]=[];
  public errormessage:string|null=null;
  constructor(private contactService:Contactservice) { }

  ngOnInit(): void {
    this.getAllcontactsfromsserver();
  }
  public getAllcontactsfromsserver(){
    this.loading=true;
    this.contactService.getAllcontacts().subscribe((data:Icontact[])=>{
      this.contacts=data;
      this.loading=false;
    },(error)=>{
      this.errormessage=error;
      this.loading=false;
  });
  }
  public clickdeletecontact(contactId:string|undefined)
  {
    if(contactId)
    {
      this.contactService.deletecontact(contactId).subscribe((data:{})=>{
        this.getAllcontactsfromsserver();
      })
    }
  }

}
