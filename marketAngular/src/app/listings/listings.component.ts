import { Component, OnInit } from '@angular/core';
import { MarketService } from './../market.service';
import { Router } from '@angular/router';
import { Bicycle } from '../bicycle';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  constructor(private _taskservice: MarketService, private _router: Router) { }

  bicycle = new Bicycle();
  bikes = [];

  ngOnInit() {
    if(!this._taskservice.getID()){
      this._router.navigate(['']);
    }
    this.GetMyBikes()
  }

  GetMyBikes(){
    this._taskservice.getMyBikes( callBikes => {
      this.bikes = callBikes;
    })
  }

  CreateBike() {
    console.log(this.bicycle);
    this._taskservice.createBike(this.bicycle, reset => {
      this.bicycle = new Bicycle();
      this.GetMyBikes()
    })
  }

  UpdateBike(id, index){
    this._taskservice.updateMyBike(id, this.bikes[index])
  }

  DeleteBike(id, index){
    this._taskservice.deleteMyBike(id, deletedata => {
      this.bikes.splice(index,1);
    })
  }

}
