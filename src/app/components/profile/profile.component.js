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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var github_service_1 = require("../../services/github.service");
var ProfileComponent = (function () {
    function ProfileComponent(_githubService, _route) {
        this._githubService = _githubService;
        this._route = _route;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var parameter = this._route.snapshot.params['login'];
        this.getUser(parameter);
        this.getRepos(parameter);
        this.getFollowers(parameter);
    };
    ProfileComponent.prototype.getUser = function (param) {
        var _this = this;
        this._githubService.getUser(param).subscribe(function (res) {
            console.log(res);
            _this.searchRes = res;
        });
    };
    ProfileComponent.prototype.getRepos = function (param1) {
        var _this = this;
        this._githubService.getRepos(param1).subscribe(function (res) {
            _this.reposRes = res;
        });
    };
    ProfileComponent.prototype.getFollowers = function (param) {
        var _this = this;
        this._githubService.getFollow(param).subscribe(function (res) {
            _this.followRes = res;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'profile',
        templateUrl: "profile.component.html",
        styleUrls: ['./profile.component.css']
    }),
    __metadata("design:paramtypes", [github_service_1.GithubService,
        router_1.ActivatedRoute])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map