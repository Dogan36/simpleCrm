import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAddCustomerComponent } from '../dialog-add-customer/dialog-add-customer.component';
import { Customer } from '../../models/customer.class';
import { MatCardModule } from '@angular/material/card';
import { Firestore, collection, onSnapshot, doc, collectionData } from '@angular/fire/firestore';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [MatButtonModule, MatIcon, MatTooltipModule, MatDialogModule, MatCardModule, RouterLink],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {

  customer = new Customer()
  customers: any = []
  constructor(public dialog: MatDialog,
    private firestore: Firestore,
    public router: Router) { }

  ngOnInit(): void {
    const usersCollectionRef = collection(this.firestore, 'customers');
    collectionData(usersCollectionRef, { idField: 'id' })
      .subscribe((customers) => {
        this.customers = customers;
        console.log('Received changes from DB', customers);
      });
  }

  openDialog() {
    this.dialog.open(DialogAddCustomerComponent);
  }
}
