import { Component, OnInit } from '@angular/core';
import {TwitterService} from '../twitter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service: TwitterService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    if (!form.invalid) {
      this.service.getLastTweets(form.value.screenName);
    }
  }

}
