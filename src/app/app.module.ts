import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {TwitterService} from './twitter.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    ListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TwitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
