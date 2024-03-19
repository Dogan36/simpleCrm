import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Firestore } from '@angular/fire/firestore';
import { getDoc, doc, onSnapshot, collection, query, where, getDocs } from 'firebase/firestore';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';

import { Customer } from '../../models/customer.class';
import { DialogEditCustomerAddressComponent } from '../dialog-edit-customer-address/dialog-edit-customer-address.component';
import { DialogEditCustomerDetailsComponent } from '../dialog-edit-customer-details/dialog-edit-customer-details.component';

@Component({
  selector: 'app-customer-detail',
  standalone: true,
  imports: [MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatIcon,
    MatButtonModule,
    MatMenuModule,
    DialogEditCustomerAddressComponent, 
    DialogEditCustomerDetailsComponent],
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.scss'
})
export class CustomerDetailComponent {

    customerId: any = ""
    customer: any = ""
    constructor(private route: ActivatedRoute, private firestore: Firestore, public dialog: MatDialog,) { }
  
    ngOnInit() {
      this.customerId = this.route.snapshot.paramMap.get('id');
      console.log(this.customerId)
      this.getCustomer()
      this.getCustomerRelations()
    }
  
    getCustomer() {
      const docRef = doc(this.firestore, "customers", this.customerId);
      const unsub = onSnapshot(docRef, (doc) => {
        console.log("Current data: ", doc.data());
        this.customer = doc.data()
      });
    }
  
    async getCustomerRelations() {
      const relationsCollectionRef = collection(this.firestore, 'relations');
      const q = query(relationsCollectionRef, where("customers", "==", this.customerId))
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    }
  
    editCustomerDetail() {
      const dialog = this.dialog.open(DialogEditCustomerDetailsComponent)
      dialog.componentInstance.customer = new Customer(this.customer)
      dialog.componentInstance.customerId = this.customerId
    }
  
    editCustomerAddress() {
      const dialog = this.dialog.open(DialogEditCustomerAddressComponent)
      dialog.componentInstance.customer = new Customer(this.customer)
      dialog.componentInstance.customerId = this.customerId
    }
  }

