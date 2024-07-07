import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './invoice/invoice.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';



@NgModule({
  declarations: [
    InvoiceComponent,
    PaymentDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaymentsModule { }
