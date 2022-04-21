import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css'],
})
export class ListPersonComponent implements OnInit {
  arrPeople = [
    { name: 'A', age: 10 },
    { name: 'B', age: 11 },
    { name: 'C', age: 12 },
  ];

  constructor() {}

  ngOnInit(): void {}
  removePersonByName(name: string){
    const index =  this.arrPeople.findIndex(e => e.name === name);
    this.arrPeople.splice(index,1);
  }
}
