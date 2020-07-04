import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../../services/menu.service";
import {menu} from "../../models/menu";

@Component({
  selector: 'app-principal-main',
  templateUrl: './principal-main.component.html',
  styleUrls: ['./principal-main.component.css']
})
export class PrincipalMainComponent implements OnInit {
  menus:menu[] = []

  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
    this.menuService.getMenu().subscribe( (response:any) =>{
      this.menus = response.data;
    })
  }

}
