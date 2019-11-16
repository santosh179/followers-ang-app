import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
var DataService = /** @class */ (function () {
    //private url = "https://jsonplaceholder.typicode.com/posts";
    function DataService(url, http) {
        this.url = url;
        this.http = http;
    }
    DataService.prototype.getAll = function () {
        return this.http.get(this.url);
    };
    DataService.prototype.create = function (resource) {
        return this.http.post(this.url, JSON.stringify(resource));
    };
    DataService.prototype.update = function (resource, data) {
        return this.http.patch(this.url + "/" + resource.id, JSON.stringify(data));
    };
    DataService.prototype.delete = function (resource) {
        return this.http.delete(this.url + "/" + resource.id);
    };
    DataService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DataService.ctorParameters = function () { return [
        { type: String },
        { type: Http }
    ]; };
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map