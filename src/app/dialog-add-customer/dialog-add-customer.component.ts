

import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogActions, MatDialogRef } from '@angular/material/dialog';
import { MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Customer } from '../../models/customer.class';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [],
  imports: [MatInputModule, MatFormFieldModule, MatDialogActions, MatHint, MatInput, MatButton, MatDatepickerModule, FormsModule, MatProgressBarModule],
  templateUrl: './dialog-add-customer.component.html',
  styleUrl: './dialog-add-customer.component.scss'
})
export class DialogAddCustomerComponent {
  constructor(private firestore: Firestore,
    public dialogRef: MatDialogRef<DialogAddCustomerComponent>) { }

  customer = new Customer();


  loading = false;

  saveCustomer() {

    this.loading = true
    addDoc(collection(this.firestore, "customers"), { ...this.customer }).then((result: any) => {
      this.loading = false;
      this.dialogRef.close()
    });
  }
}

