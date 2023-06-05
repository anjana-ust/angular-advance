import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { product } from '../model/product';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }
  baseurl="http://localhost:8090/product/api.2.0/retrieve";

  getProducts(){
    return this.http.get<product[]>("http://localhost:8090/product/api.2.0/retrieve/all")
  }
  saveProduct(product:product):Observable<Object>{
    return this.http.post("http://localhost:8090/product/api.2.0/create",product);
  }
  
  getProduct(id:number):Observable<Object>{
    return this.http.get(`${this.baseurl}/${id}`)
  }
  
  getProductById(id: number): Observable<product> {
    return this.http.get<product>(`http://localhost:8090/product/api.2.0/retrieve/${id}`);
  }

  updateProduct(product: product): Observable<Object> {
    return this.http.put(`http://localhost:8090/product/api.2.0/update/${product.productId}`, product);
  }
}
 

