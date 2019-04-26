import {Component , OnInit} from '@angular/core';
import {Router , ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.servise';
import {Artist} from '../../Artist';
import {Album} from "../../Album";

@Component({
    moduleId:module.id,
    selector:'artist',
    templateUrl:'artist.component.html'
})

export class ArtistComponent implements OnInit
{
    id:string;
    artist : Artist[];
    albums:Album[];
   constructor(private _spotify:SpotifyService , private _router:ActivatedRoute){}

    ngOnInit()
    {
        this._router.params
            .map(params => params['id'])
            .subscribe((id) =>{
                this._spotify.getArtist(id)
                    .subscribe(artists => this.artist = artists);
                this._spotify.getAlbums(id)
                    .subscribe(album => this.albums = album.items )
            })
    }
}