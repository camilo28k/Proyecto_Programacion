import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Paisaje } from './paisaje';
import { PAISAJES } from './paisajes.json';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PaisajesService {

private urlEndpoint='http://localhost:8081/api/paisajes'

private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http:HttpClient) { }

  getPaisajes():Observable<Paisaje[]>{
    
   // return of (PAISAJES);

   return this.http.get(this.urlEndpoint).pipe(
    map((response)=>response as Paisaje[])
   )
  
  }

  create(paisaje:Paisaje):Observable<Paisaje>{
    return this.http.post<Paisaje>(this.urlEndpoint,paisaje,{headers:this.httpHeaders})
  }


}
