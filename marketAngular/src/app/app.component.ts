import { Component } from '@angular/core';
import { MarketService } from './market.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bicycle Marketplace';
  private loggedUserID = null;

  constructor(private _taskservice: MarketService) { }
  
  ngOnInit() {
  }

  updateID() {
    this.loggedUserID = this._taskservice.getID();  
    console.log("inside datafromchild", this.loggedUserID);  
  }

  resetID() {
    this._taskservice.resetID();
  }

}
