import {Component, OnDestroy, OnInit} from '@angular/core';
import {TwitterService} from '../twitter.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  tweets = [];
  private _subscription: Subscription;

  constructor(private service: TwitterService) { }

  ngOnInit() {
    this.tweets = this.service.tweets;
    this._subscription = this.service.tweetListChanged.subscribe(() => {
      this.tweets = this.service.tweets;
    });
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

}
