import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts = [
    {id: 1, name: 'Ray', phonenumber: '123455'},
    {id: 2, name: 'Sai', phonenumber: '123455'},
    {id: 3, name: 'Kai', phonenumber: '123455'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
