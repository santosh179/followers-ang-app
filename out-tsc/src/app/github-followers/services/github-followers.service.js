var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
var GithubFollowersService = /** @class */ (function (_super) {
    __extends(GithubFollowersService, _super);
    function GithubFollowersService(http) {
        return _super.call(this, "https://api.github.com/users/mosh-hamedani/followers", http) || this;
    }
    GithubFollowersService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    GithubFollowersService.ctorParameters = function () { return [
        { type: Http }
    ]; };
    return GithubFollowersService;
}(DataService));
export { GithubFollowersService };
//# sourceMappingURL=github-followers.service.js.map