import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Icontact } from 'models/Icontact';
import { Contactservice } from 'src/Services/contact.Service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  public loading:boolean=false;
  public contactId:string |null=null;
  public contact:Icontact={} as Icontact;
  public errormessage:string|null=null;

  constructor(private activatedRoute:ActivatedRoute,private contactService:Contactservice) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
     this.contactId=param.get('contactId');
    });

    if(this.contactId){
      this.loading=true;
      this.contactService.getcontacts(this.contactId).subscribe((data:Icontact)=>{
          this.contact=data;
          this.loading=false;
      },(error)=>{
        this.errormessage=error;
        this.loading=false; 
      });
    }
  }

  public isNotEmpty(){
    return Object.keys(this.contact).length>0;
  }

}
