import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environments';


@Injectable({
  providedIn: 'root'
})
export class servicesDental {
    private headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('ordProyecto', 'a6093c23ae10457c8t0b8b298fc8b500')
    .set('ordCandidato', '6045c3f8a3a34293848521890f5a9b2d');

  constructor (private http: HttpClient){}

  
  doctorsInfoService(){
     return this.http.get(`${environment.URIS}/listaDoctores`,{ headers: this.headers })
  }

  sendApoinment(data:any){
    return this.http.post(`${environment.URIS}/mensaje`, data, { headers: this.headers })
  }
 newsLetterService(data:any){
    return this.http.post(`${environment.URIS}/newsletter`, data, { headers: this.headers })
 }

 
} 