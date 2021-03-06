import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() name!: string;
  @Input()age!: Number;
  @Output() removePerson = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  removeByClick(){
      this.removePerson.emit(this.name)
  }

}
