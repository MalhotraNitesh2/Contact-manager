import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Icontact } from 'models/Icontact';
import { Contactservice } from 'src/Services/contact.Service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  public loading:boolean=false;
  public contact:Icontact= {} as Icontact;
  public contactId:string|null=null;
  public errormessage:string|null=null;

  constructor(private activatedRoute:ActivatedRoute,
    private contactservice:Contactservice,private router:Router) { 

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      this.contactId=param.get('contactId')
    });
    if(this.contactId){
      this.contactservice.getcontacts(this.contactId).subscribe((data:Icontact)=>{
        this.contact=data;
        this.loading=false;
      },(error)=>{
        this.errormessage=error;
        this.loading=false;
      })
    }
  }
  public submitUpdate(){
    if(this.contactId){
      this.contactservice.updatecontact(this.contact,this.contactId).subscribe((data:Icontact)=>{
        this.router.navigate(['/']).then();
      },(error)=>{
        this.errormessage=error;
        this.router.navigate(['/contacts/edit/${this.contactId}']).then();
      });
    }
  }
}
