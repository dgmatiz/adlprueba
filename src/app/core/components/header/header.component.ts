import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nameUser: any;

  constructor(private authService: AuthService) { }

  validateUser(){
    return this.authService.isLogin()
  }

  ngOnInit(): void {
    this.validateUser()
  }

}
