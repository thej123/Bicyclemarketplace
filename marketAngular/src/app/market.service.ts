import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http/src/static_response';
import { error } from 'util';

@Injectable()
export class MarketService {

  constructor(private _http: Http) { }

  private loggedUserID = null;
  private loggedUser = null;

  createUser(user, nav, alert) {
    this.loggedUser = user.firstName
    this._http.post('/user', user).subscribe(
      (res) => {
        if (res.json()){
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

  getID(){
    return this.loggedUserID;
  }

  resetID() {
    this.loggedUserID = null;
  }


  createBike(bikeObject, reset){
    bikeObject._creator = this.loggedUserID;
    this._http.post('/bicycle', bikeObject).subscribe(
      res => {
          reset()         
      },
      err => {
        console.log("could not create bikeObject", err)
      }
    )
  }

  getMyBikes(callback){
    this._http.get(`/bicycle/${this.loggedUserID}`).subscribe(
      res => {
        console.log("got bikes", res.json());
        callback(res.json())
      },
      err => {
        console.log("cannot get the bikes", err);
      }
    )
  }

  deleteMyBike(id, callback){
    this._http.delete(`/bicycle/${id}`).subscribe(
      res => {
        callback();
      },
      err => {
        console.log("could not delete the bike", err);
      }
    )
  }

  updateMyBike(id, bikeObject){
    this._http.put(`/bicycle/${id}`, bikeObject).subscribe(
      res => {
        console.log("inside res of updatemybike", res)
      },
      err => {
        console.log("could not update the bike", err);
      }
    )
  }

  getAllBikes(callback){
    this._http.get('/bicycles').subscribe(
      res =>{
        callback(res.json())
      },
      err => {
        console.log("cannot get all the bikes", err);
      }
    )
  }



}
