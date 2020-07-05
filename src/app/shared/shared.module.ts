import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";
import {CarouselModule} from "ngx-owl-carousel-o";
import {MatProgressBarModule} from "@angular/material/progress-bar";

import {NotificationComponent} from "@adl/shared/notification/notification.component";
import {CarruselComponent} from '@adl/shared/carrusel/carrusel.component';
import {CardDepositAccountComponent} from '@adl/shared/card-deposit-account/card-deposit-account.component';
import {CardCreditCardComponent} from '@adl/shared/card-credit-card/card-credit-card.component';
import {CardCurrentAccountComponent} from '@adl/shared/card-current-account/card-current-account.component';
import {CardCreditComponent} from '@adl/shared/card-credit/card-credit.component';
import {CardCdtComponent} from '@adl/shared/card-cdt/card-cdt.component';
import {OtherProductComponent} from '@adl/shared/other-product/other-product.component';
import {MaskcardPipe} from "@adl/pipes/maskcard.pipe";
import {ModalComponent} from '@adl/shared/modal/modal.component';


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
