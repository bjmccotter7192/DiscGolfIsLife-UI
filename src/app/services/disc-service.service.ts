import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Disc } from '../models/disc';

@Injectable()
export class DiscServiceService {
  public discs: Observable<Disc[]>;
  private dataStore: {
    discs: Disc[]
  };

  private url: string = 'https://disc-golf-is-life.herokuapp.com/api/discs';

  constructor(public http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get(this.url);
  }

  public addDisc(discData: any) {
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

    this.http.post(this.url, discData, {
      headers: headers
    })
    .subscribe(data => {
      console.log(data);
    });
  }

  // loadAll() {
  //   this.getData().subscribe(data => {
  //     this.dataStore.discs = data;
  //   }, error => console.log('Could not load flowers.'));
  // }

}
