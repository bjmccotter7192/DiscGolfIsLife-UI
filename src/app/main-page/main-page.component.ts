import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public adding: boolean = false;
  public newDiscButton: string;

  constructor() { }

  ngOnInit() {
    this.newDiscButton = 'Add New Disc';
  }

  toggleAddNew(){
    this.adding = !this.adding;
    if(this.adding)
      this.newDiscButton = 'Close Add Disc';
    else  
      this.newDiscButton = 'Add New Disc';
  }
}
