import { Component, OnInit } from '@angular/core';
import { MarketService } from './../market.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor(private _taskservice: MarketService, private _router: Router) { }

  loggedUserID;
  allbikes = [];

  ngOnInit() {
    if(!this._taskservice.getID()){
      this._router.navigate(['']);
    }
    else {
      this.loggedUserID = this._taskservice.getID();
      this._taskservice.getAllBikes( theResponse => {
        this.allbikes = theResponse;
      })
    }
  }

  Contact(id, name, bike) {
    console.log("contact", bike, id, name)
    // console.log("contact again", bike.)

    alert("Name: " + name)
  }

  DeleteBike(id, index) {
    this._taskservice.deleteMyBike(id, remove => {
      this.allbikes.splice(index,1);
    })
  }

}
