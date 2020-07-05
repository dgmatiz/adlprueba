import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationComponent} from "./notification/notification.component";
import {CarruselComponent} from './carrusel/carrusel.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import {CardDepositAccountComponent} from './card-deposit-account/card-deposit-account.component';
import {CardCreditCardComponent} from './card-credit-card/card-credit-card.component';
import {CardCurrentAccountComponent} from './card-current-account/card-current-account.component';
import {CardCreditComponent} from './card-credit/card-credit.component';
import {CardCdtComponent} from './card-cdt/card-cdt.component';
import {TranslateModule} from "@ngx-translate/core";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { OtherProductComponent } from './other-product/other-product.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    NotificationComponent,
    CarruselComponent,
    CardDepositAccountComponent,
    CardCreditCardComponent,
    CardCurrentAccountComponent,
    CardCreditComponent,
    CardCdtComponent,
    OtherProductComponent
  ],
  exports: [
    NotificationComponent,
    CarruselComponent,
    CardDepositAccountComponent,
    CardCdtComponent,
    CardCreditComponent,
    CardCreditCardComponent,
    CardCurrentAccountComponent,
    OtherProductComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    TranslateModule,
    MatIconModule,
    MatProgressBarModule,
    RouterModule
  ]
})
export class SharedModule {
}
