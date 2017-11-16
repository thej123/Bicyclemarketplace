import { Component, OnInit} from '@angular/core';
import { MarketService } from './../market.service';
import { Router } from '@angular/router';
import { User } from './../user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObject = {
    email : '',
    password: ''
  }

  user = new User();
  loginAlert = false;
  regAlert = false;

  constructor(private _taskservice: MarketService, private _router: Router) { }

  ngOnInit() {
  }

  Login() {
    console.log("inside login", this.loginObject)
    this._taskservice.login(this.loginObject, navigate => {
      this._router.navigate(['/browse']);
    }, alerting => {
      this.loginAlert = true;
      alert("Invalid Login details!")
    })
  }

  Register() {
    // console.log("inside register", this.user)
    this._taskservice.createUser(this.user, navigate => {
      this._router.navigate(['/browse']);
    }, alerting => {
      this.regAlert = true;
      alert("Email Already Exist!")
    })
  }
}
