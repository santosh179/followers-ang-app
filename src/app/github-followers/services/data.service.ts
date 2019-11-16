import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

    // private url = "https://jsonplaceholder.typicode.com/posts";

    constructor(private url: string , private http: Http) {

     }

   getAll() {
     return this.http.get(this.url);
   }

   create(resource) {
    return this.http.post(this.url, JSON.stringify(resource));
   }

   update(resource, data) {
     return this.http.patch(this.url + '/' + resource.id, JSON.stringify(data));
   }

   delete(resource) {
     return this.http.delete(this.url + '/' + resource.id);
   }
}
