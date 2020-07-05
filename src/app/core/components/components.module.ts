import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {UserMainComponent} from './user-main/user-main.component';
import {PrincipalMainComponent} from './principal-main/principal-main.component';
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {FooterComponent } from './footer/footer.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    HeaderComponent,
    PrincipalMainComponent,
    UserMainComponent,
    PrincipalMainComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    PrincipalMainComponent,
    UserMainComponent,
    FooterComponent,
  ]
})
export class ComponentsModule {
}
