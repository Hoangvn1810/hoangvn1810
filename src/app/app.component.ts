import { Component, OnInit, VERSION } from '@angular/core';
import { UsersService } from './users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Member{
    id: number;
    name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  formGroup!: FormGroup;

constructor(private readonly formBuilder: FormBuilder){}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

}

createMemberGroup(member: Member): FormGroup {
  return this.formBuilder.group({
    ...member,
    ...{
      name: [member.name, Validators.required]
    }
  })
}
}
