import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {Subject} from 'rxjs'

@Injectable()
 
export class AuthService{
     
    constructor(private http: HttpClient){}

   

    register(credentials:any)
    {
       this.http.post<any>('http://localhost:59670/api/account', credentials).subscribe(res =>{
           localStorage.setItem('token', res)
       })
    }

}
