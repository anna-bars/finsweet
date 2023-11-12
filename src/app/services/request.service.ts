import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  test: number = 1;
  constructor(public http: HttpClient) {

  }
  getData<Type> (url: string) {
    return this.http.get<Type>(url);
  }
  postData(url: string, obj: {email: string, password: string}){
    return this.http.post(url, obj)
  }
  postCategoryData(url: string, obj: Category){
    return this.http.post(url, obj)
  }
  headers = new HttpHeaders({'Content-Type': 'application/json',});
  putData<Type>(url: string, obj: Type) {
    return this.http.put(url, obj, { headers: this.headers });
  }
  
  deleteData(url: string) {
    return this.http.delete(url, { headers: this.headers });
  }

  post<Type>(url: string, obj: Type){
    return this.http.post(url, obj);
  }
}
