import {Component} from '@angular/core';
import {SpotifyService} from '../../services/spotify.servise';
import {Artist} from '../../Artist';


@Component({
    moduleId:module.id,
    selector:'search',
    templateUrl:'search.component.html',
})

export class SearchComponent
{
    private searchStr:string;
     myResult : Artist[];
    constructor(private _spotify : SpotifyService){}

    search()
    {
         this._spotify.searchMusic(this.searchStr)
            .subscribe(res=>{
                this.myResult = res.artists.items;
            });
    }
}