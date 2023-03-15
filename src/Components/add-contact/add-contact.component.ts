import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Icontact } from 'models/Icontact';
import { Contactservice } from 'src/Services/contact.Service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  public loading:boolean=false;
  public contact:Icontact={} as Icontact;
  public errorMessage:string|null=null;

  constructor(private contactservice:Contactservice,private router:Router) { }

  ngOnInit(): void {
  }
  public createSubmit(){
    this.contactservice.createcontact(this.contact).subscribe((data:Icontact)=>{
      this.router.navigate(['/']).then();
    },(error)=>{
      this.errorMessage=error;
      this.router.navigate(['/contacts/add']).then();
    })
  }

}
