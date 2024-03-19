import { Component } from '@angular/core';
import { Customer } from '../../models/customer.class';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogActions, MatDialogRef } from '@angular/material/dialog';

import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { Firestore, setDoc, doc} from '@angular/fire/firestore';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@Component({
  selector: 'app-dialog-edit-customer-address',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatDialogActions, MatInput, MatButton, MatDatepickerModule, FormsModule, MatProgressBarModule],
  templateUrl: './dialog-edit-customer-address.component.html',
  styleUrl: './dialog-edit-customer-address.component.scss'
})
export class DialogEditCustomerAddressComponent {
  constructor(private firestore: Firestore, 
    public dialogRef: MatDialogRef<DialogEditCustomerAddressComponent>){}
  customer!: Customer;
  customerId!:any
loading=false
saveCustomer() {

  this.loading = true
  setDoc(doc(this.firestore, "customers", this.customerId), { ...this.customer }).then((result: any) => {
    this.loading = false;
    this.dialogRef.close()
  });
}
}
