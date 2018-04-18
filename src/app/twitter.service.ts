import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';

import {environment} from '../environments/environment';

@Injectable()
export class TwitterService {
  tweetListChanged = new Subject<void>();

  constructor(private http: HttpClient) {
    this._tweets = [];
    this._baseUrl = environment.twitter.baseUrl;
  }

  private _tweets: Array<Object>;
  private readonly _baseUrl: string;

  get tweets(): Array<Object> {
    return this._tweets;
  }

  set tweets(value: Array<Object>) {
    this._tweets = value;
  }

  getLastTweets(screenName: string) {
    const url = this._baseUrl + environment.twitter.lastTweets.replace('${screenName}', screenName);
    this.http.get<Array<Object>>(url, {responseType: 'json'})
      .subscribe((tweets) => {
        this.tweets = tweets;
        this.tweetListChanged.next();
      });
  }
}
