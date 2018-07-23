import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {
  private _url = "assets/data/story.json";

  constructor(private _http: HttpClient) { }

  getStory() {
    return this._http.get(this._url).pipe(map((res: Response) => res[0]));
  }

  getNextPage(id) {
    return this._http.get(this._url).pipe(map((res: Response) => res[id]));
  }
}
