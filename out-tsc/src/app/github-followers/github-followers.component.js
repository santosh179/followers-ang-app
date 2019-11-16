import { GithubFollowersService } from './services/github-followers.service';
import { Component } from '@angular/core';
var GithubFollowersComponent = /** @class */ (function () {
    function GithubFollowersComponent(service) {
        this.service = service;
    }
    GithubFollowersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAll().subscribe(function (response) {
            _this.followers = response.json();
        });
    };
    GithubFollowersComponent.decorators = [
        { type: Component, args: [{
                    selector: 'followers',
                    templateUrl: './github-followers.component.html',
                    styleUrls: ['./github-followers.component.css']
                },] },
    ];
    /** @nocollapse */
    GithubFollowersComponent.ctorParameters = function () { return [
        { type: GithubFollowersService }
    ]; };
    return GithubFollowersComponent;
}());
export { GithubFollowersComponent };
//# sourceMappingURL=github-followers.component.js.map