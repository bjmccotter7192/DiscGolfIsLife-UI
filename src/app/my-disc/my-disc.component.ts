import { Component, OnInit, Input } from '@angular/core';
import { Disc } from '../models/disc';

@Component({
  selector: 'app-my-disc',
  templateUrl: './my-disc.component.html',
  styleUrls: ['./my-disc.component.css']
})
export class MyDiscComponent implements OnInit {
  @Input() disc: Disc;

  constructor() { }

  ngOnInit() {
  }

  getColor(discSpeed: number){
    if(discSpeed >= 10)
      return 'red';
    else if(discSpeed >= 6)
      return 'orange';
    else if(discSpeed >= 4)
      return 'blue';
    else
      return 'green';
  }
}
