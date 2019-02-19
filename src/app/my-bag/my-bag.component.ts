import { Component, OnInit } from '@angular/core';
import { DiscServiceService } from '../services/disc-service.service';
import { Disc } from '../models/disc';

@Component({
  selector: 'app-my-bag',
  templateUrl: './my-bag.component.html',
  styleUrls: ['./my-bag.component.css']
})
export class MyBagComponent implements OnInit {
  public discs: Disc[];

  constructor(private discService: DiscServiceService) { }

  ngOnInit() {
    this.discService.getData().subscribe(res => {
      this.discs = res;
      this.discs = this.discs.sort(x => x.speed).sort(y => y.glide);
    });
  }

}
