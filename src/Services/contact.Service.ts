import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Icontact } from "models/Icontact";
import { catchError, Observable, throwError } from "rxjs";
@Injectable({
    providedIn:'root'
})
export class Contactservice{
    private  serverUrl:string=`http://localhost:9000`


    constructor(private httpclient:HttpClient)
    {
        
    }

    public getAllcontacts():Observable<Icontact[]>{
        let dataUrl:string=`${this.serverUrl}/contacts`
        return this.httpclient.get<Icontact[]>(dataUrl).pipe(catchError(this.handleError));
    }
    public getcontacts(contactId:string):Observable<Icontact>{
        let dataUrl:string=`${this.serverUrl}/contacts/${contactId}`
        return this.httpclient.get<Icontact>(dataUrl).pipe(catchError(this.handleError));
    }
    public createcontact(contact:Icontact):Observable<Icontact>{
        let dataUrl:string=`${this.serverUrl}/contacts`;
        return this.httpclient.post<Icontact>(dataUrl,contact).pipe(catchError(this.handleError));
    }
    public updatecontact(contact:Icontact,contactId:string):Observable<Icontact>{
        let dataUrl:string=`${this.serverUrl}/contacts/${contactId}`;
        return this.httpclient.put<Icontact>(dataUrl,contact).pipe(catchError(this.handleError));
    }
    public deletecontact(contactId:string):Observable<{}>{
        let dataUrl:string=`${this.serverUrl}/contacts/${contactId}`;
        return this.httpclient.delete<{}>(dataUrl).pipe(catchError(this.handleError));
    }
    public handleError(error:HttpErrorResponse){
        let errormessage:string=' ';
        if(error.error instanceof ErrorEvent){
            errormessage=`Error:${error.error.message}`
        }
        else{
            errormessage=`status:${error.status}\n Message:${error.message}`;
        }
        return throwError(errormessage);
    }
}