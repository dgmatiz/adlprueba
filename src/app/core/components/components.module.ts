import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";

import {HeaderComponent} from '@adl/components/header/header.component';
import {UserMainComponent} from '@adl/components/user-main/user-main.component';
import {PrincipalMainComponent} from '@adl/components/principal-main/principal-main.component';
import {FooterComponent} from '@adl/components/footer/footer.component';
import {SharedModule} from '@adl/shared/shared.module';

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
