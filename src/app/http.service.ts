import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getTrailers(channelId:string){

    let params = new HttpParams();
    params =  params.append('key', environment.ytAPIkey);
    params = params.append('part', 'snippet');
    params = params.append('channelId', channelId);
    params = params.append('maxResults', '50'),
    params = params.append('q', 'trailer');
    params = params.append('order', 'date');

    let url = "https://www.googleapis.com/youtube/v3/search"
    return this.http.get(url, {params: params});
    
  }
}
