import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class TestdataService {
  constructor(private _http:Http) { }

  getData(){
    return this._http.post('http://localhost/json.php',{}).map(res => res.json());
  }
}
