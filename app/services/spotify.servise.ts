import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService
{
   constructor(private _http:Http){}
    
    private searchUrl : string;
     artistUrl:string;
    albumUrl : string;
    albumsUrl : string;
    
    searchMusic(mySearch:string , type = "artist")
    {
        this.searchUrl = "https://api.spotify.com/v1/search?query="+mySearch+"&offset=0&limit=20&type="+type;
             return this._http.get(this.searchUrl)
                                 .map(res=>res.json());
    }
    getArtist(id:string )
    {
        this.artistUrl = "https://api.spotify.com/v1/artists/"+id;
        return this._http.get(this.artistUrl)
            .map(res=>res.json());
    }
    getAlbums(id:string )
    {
        this.albumsUrl = "https://api.spotify.com/v1/artists/"+id+"/albums";
        return this._http.get(this.albumsUrl)
            .map(res=>res.json());
    }
    getAlbum(id:string )
    {
        this.albumUrl = "https://api.spotify.com/v1/albums/"+id;
        return this._http.get(this.albumUrl)
            .map(res=>res.json());
    }
}