import { Component, OnInit } from '@angular/core';
import { DiscServiceService } from '../services/disc-service.service';
import { Disc } from '../models/disc';

@Component({
  selector: 'app-add-disc',
  templateUrl: './add-disc.component.html',
  styleUrls: ['./add-disc.component.css']
})
export class AddDiscComponent implements OnInit {

  constructor(private discService: DiscServiceService) { }

  public disc: Disc;
  public added: boolean = false;

  ngOnInit() {
    this.disc = new Disc;
  }

  async addDisc(){
    this.added = true;
    await this.discService.addDisc(this.disc);
  }

  cancelAddDisc(){
    if(confirm('This is going to clear changes and reload. Do you wish to continue?'))
      window.location.reload();    
  }

  isValid(){
    if(this.disc
      && this.disc.discName
      && this.disc.manufacturer
      && (this.disc.speed || this.disc.speed == 0)
      && (this.disc.turn || this.disc.turn == 0)
      && (this.disc.glide || this.disc.glide == 0)
      && (this.disc.fade || this.disc.fade == 0)
      && this.disc.plastic
      && this.disc.weight)
      {
        return true;
      }
      else{
        return false;
      }
  }

}
