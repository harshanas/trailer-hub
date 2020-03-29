import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

import * as timeago from 'timeago.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  trailers = [];
  timestamp : string;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {

    let channelIds = [
      "UC1Myj674wRVXB9I4c6Hm5zA", // Apple TV
      "UCZSNzBgFub_WWil6TOTYwAg", // Netflix India
      "UCWOA1ZGywLbqmigxE4Qlvuw" // Netflix
    ];

    for (let channelId of channelIds){
      this._http.getTrailers(channelId).subscribe(data => {
        for (let item of data['items']){
          let trailerName = item.snippet.title.toLowerCase();
          if (trailerName.includes("trailer")) {
            this.trailers.push(item);
          }        
        }
      })
    }

    console.log(this.trailers);
    
  }

  formatTimestamp(timestamp: string):string{
    return timeago.format(timestamp);
  }

}
