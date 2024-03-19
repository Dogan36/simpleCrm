import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogActions, MatDialogRef } from '@angular/material/dialog';

import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

import { FormsModule } from '@angular/forms';
import { Firestore, setDoc, collection, } from '@angular/fire/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { doc } from 'firebase/firestore';
import { Customer } from '../../models/customer.class';

@Component({
  selector: 'app-dialog-edit-customer-details',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatDialogActions, MatInput, MatButton, MatDatepickerModule, FormsModule, MatProgressBarModule, MatDatepickerModule,],
  templateUrl: './dialog-edit-customer-details.component.html',
  styleUrl: './dialog-edit-customer-details.component.scss'
})
export class DialogEditCustomerDetailsComponent {
  constructor(private firestore: Firestore, 
    public dialogRef: MatDialogRef<DialogEditCustomerDetailsComponent>) { }
  customer!: Customer;
  customerId!:any
  loading = false;


  saveCustomer() {
   
    this.loading = true
    setDoc(doc(this.firestore, "customers", this.customerId), { ...this.customer }).then((result: any) => {
      this.loading = false;
      this.dialogRef.close()
    });
  }
}
