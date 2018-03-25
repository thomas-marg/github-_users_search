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
var github_service_1 = require("../../services/github.service");
var SearchComponent = (function () {
    function SearchComponent(_githubService) {
        this._githubService = _githubService;
    }
    SearchComponent.prototype.getUsers = function () {
        var _this = this;
        this._githubService.getUsers(this.searchStr).subscribe(function (res) {
            //console.log(res.items);
            _this.searchRes = res.items;
        });
    };
    ;
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'search',
        templateUrl: "./search.component.html",
        styleUrls: ['./search.component.css']
    }),
    __metadata("design:paramtypes", [github_service_1.GithubService])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map