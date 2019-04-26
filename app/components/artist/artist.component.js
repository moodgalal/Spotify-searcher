"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var spotify_servise_1 = require("../../services/spotify.servise");
var ArtistComponent = (function () {
    function ArtistComponent(_spotify, _router) {
        this._spotify = _spotify;
        this._router = _router;
    }
    ArtistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.params
            .map(function (params) { return params['id']; })
            .subscribe(function (id) {
            _this._spotify.getArtist(id)
                .subscribe(function (artists) { return _this.artist = artists; });
            _this._spotify.getAlbums(id)
                .subscribe(function (album) { return _this.albums = album.items; });
        });
    };
    return ArtistComponent;
}());
ArtistComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'artist',
        templateUrl: 'artist.component.html'
    }),
    __metadata("design:paramtypes", [spotify_servise_1.SpotifyService, router_1.ActivatedRoute])
], ArtistComponent);
exports.ArtistComponent = ArtistComponent;
//# sourceMappingURL=artist.component.js.map