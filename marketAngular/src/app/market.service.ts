import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http/src/static_response';
import { error } from 'util';

@Injectable()
export class MarketService {

  constructor(private _http: Http) { }

  loggedUserID = null;
  loggedUser = null;

  createUser(user, nav, alert) {
    this.loggedUser = user.firstName
    this._http.post('/user', user).subscribe(
      (res) => {
        if (res.json()){
          console.log("inside if", res.json());
          this.loggedUserID = res.json()._id;
          nav()
        } else{
          alert()
          console.log("inside else", res.json()); 
        }
      },
      (error) => {
        console.log("could not retrive all data")
        
      }
    )
  }

  login(loginObject, nav, alert){
    this._http.post('/userlogin', loginObject).subscribe(
      (res) => {
        if (res.json()){
          console.log("inside if", res.json());
          this.loggedUserID = res.json()._id;
          nav()
        } else{
          alert()
          console.log("inside else", res.json()); 
        }
        console.log("whats the id ", this.loggedUserID)
      },
      (error) => {
        console.log("could not retrive all data")
      }
    )

    
  }




}
