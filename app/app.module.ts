import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routing} from './app.routing';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AboutComponent} from './components/about/about.component';
import {SearchComponent} from './components/search/search.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {PageNotFoundComponent} from './components/pageNotFound/pageNotFound.component';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';

@NgModule({
  imports:      [ BrowserModule ,Routing , FormsModule , HttpModule],
  declarations: [ AppComponent , AboutComponent , SearchComponent , NavbarComponent , PageNotFoundComponent, ArtistComponent ,AlbumComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
