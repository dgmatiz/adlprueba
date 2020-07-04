import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../../services/menu.service";
import {menu} from "../../models/menu";

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit {
  menus: menu[] = [];

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.menuService.getMenuUser().subscribe((response: any) => {
      this.menus = response.data;
    });
  }

}
