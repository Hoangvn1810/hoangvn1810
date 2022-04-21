import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {
  birthday = new Date(2015,7,25);
  person = {name:'abc', age:20};
  adress = Promise.resolve('hai ba');
  constructor() { }

  ngOnInit(): void {
  }

}
