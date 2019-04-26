import {ModuleWithProviders} from '@angular/core';
import {Routes , RouterModule} from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {SearchComponent} from './components/search/search.component';
import {ArtistComponent} from './components/artist/artist.component';
import {PageNotFoundComponent} from './components/pageNotFound/pageNotFound.component';
import {AlbumComponent} from './components/album/album.component';

const appRoutes:Routes = [
    {path:'' , component:SearchComponent},  //Setting the search component as home page
    {path:'about' , component:AboutComponent},
    {path:'artist/:id' , component:ArtistComponent},
    {path:'album/:id' , component:AlbumComponent},
    {path:'**' , component:PageNotFoundComponent},
];

export const Routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);