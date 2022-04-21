import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  template: `
    <form (ngSubmit)="onSubmit(formSignIn);" #formSignIn="ngForm">
      <input placeholder="Email" #txtemail="ngModel" ngModel name="email" required><br><br>
      <p *ngIf="txtemail.touched && txtemail.errors?.['required']">nhap</p><br><br>
      <p *ngIf="txtemail.errors?.['email']">nhap2</p>
      <input
        type="password"
        placeholder="Password"
        ngModel name="password"
        minlength="6"
        #txtpassword="ngModel"
        >
        <br><br>
      <div ngModelGroup="subject">
      <label><input type="checkbox" [ngModel]="false" name="football">Football</label><br><br>
      <label><input type="checkbox" [ngModel]="false" name="node">node</label><br><br>
      <label><input type="checkbox" [ngModel]="false" name="angular">angular</label><br><br>
      </div>
      <button [disabled]="formSignIn.invalid">Submit</button>
    </form><br>
    <button (click)="postToExpress();")>POST</button>
    <p>{{txtemail.errors | json}} </p>
    <p>{{formSignIn.value | json}} </p>
    <p>{{txtpassword.errors | json}} </p>
  `
})
export class SignInComponent implements OnInit {
  constructor(private HttpClient : HttpClient){

  }


  onSubmit(formSignIn: any){
    const url = 'http://localhost:3000/signin';
    const headers = new HttpHeaders({'Content-Type':  'application/json'});
    const body = JSON.stringify(formSignIn.value);
    this.HttpClient.post(url,body,{headers})
    .toPromise()
    .then(resJson => console.log(resJson));
  }



  ngOnInit(): void {
  }

  postToExpress(){
    const url = 'http://localhost:3000/signin';
    const headers = new HttpHeaders({'Content-Type':  'application/json'});
    const body = JSON.stringify({name: 'Khoa Pham'});
    this.HttpClient.post(url,body,{headers})
    .toPromise()
    .then(resText => console.log(resText));
  }



}
