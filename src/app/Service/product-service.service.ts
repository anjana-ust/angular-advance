import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<product[]>("http://localhost:8090/product/api.2.0/retrieve/al")
  }
}
