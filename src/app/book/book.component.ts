import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  name = '';
  name1 ='';
  oddStyle = {color: 'black', fontSize: '30px'};
  evenStyle = {color: 'red', fontSize: '50px'};
  isHighlight = true;
  currentClass = {circle: this.isHighlight, square: !this.isHighlight}

  constructor() { }

  ngOnInit(): void {
  }

  showEvent(event:any){
    this.name = event.target.value;
  }

}
