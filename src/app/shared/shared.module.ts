import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {NotificationComponent} from "./notification/notification.component";
import {MatIconModule} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";
import {CarouselModule} from "ngx-owl-carousel-o";
import {MatProgressBarModule} from "@angular/material/progress-bar";

import {CarruselComponent} from './carrusel/carrusel.component';
import {CardDepositAccountComponent} from './card-deposit-account/card-deposit-account.component';
import {CardCreditCardComponent} from './card-credit-card/card-credit-card.component';
import {CardCurrentAccountComponent} from './card-current-account/card-current-account.component';
import {CardCreditComponent} from './card-credit/card-credit.component';
import {CardCdtComponent} from './card-cdt/card-cdt.component';
import {OtherProductComponent} from './other-product/other-product.component';
import {MaskcardPipe} from "../pipes/maskcard.pipe";
import {ModalComponent} from './modal/modal.component';



@NgModule({
  declarations: [
    NotificationComponent,
    CarruselComponent,
    CardDepositAccountComponent,
    CardCreditCardComponent,
    CardCurrentAccountComponent,
    CardCreditComponent,
    CardCdtComponent,
    OtherProductComponent,
    ModalComponent,
    MaskcardPipe,
  ],
  exports: [
    NotificationComponent,
    CarruselComponent,
    CardDepositAccountComponent,
    CardCdtComponent,
    CardCreditComponent,
    CardCreditCardComponent,
    CardCurrentAccountComponent,
    OtherProductComponent,
    ModalComponent,
    MaskcardPipe,
  ],
  imports: [
    CommonModule,
    CarouselModule,
    TranslateModule,
    MatIconModule,
    MatProgressBarModule,
    RouterModule,
  ]
})
export class SharedModule {
}
