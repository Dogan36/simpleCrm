import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Firestore } from '@angular/fire/firestore';
import { getDoc, doc, onSnapshot } from 'firebase/firestore';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditDetailsComponent } from '../dialog-edit-details/dialog-edit-details.component';
import { User } from '../../models/user.class';
@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCard, 
    MatCardContent, 
    MatCardHeader,
    MatCardTitle, 
    MatIcon, 
    MatButtonModule, 
    MatMenuModule, 
    DialogEditAddressComponent, 
    DialogEditDetailsComponent],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  userId: any = ""
  user: any = ""
  constructor(private route: ActivatedRoute, private firestore: Firestore, public dialog: MatDialog,) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    console.log(this.userId)
    this.getUser()
  }

  async getUser() {
    const docRef = doc(this.firestore, "users", this.userId);
    const unsub = onSnapshot(docRef, (doc) => {
      console.log("Current data: ", doc.data());
      this.user=doc.data()
  });
  
     
  }

editUserDetail(){
const dialog = this.dialog.open(DialogEditDetailsComponent)
dialog.componentInstance.user = new User(this.user)
dialog.componentInstance.userId = this.userId
}

editUserAddress(){
  const dialog =  this.dialog.open(DialogEditAddressComponent)
  dialog.componentInstance.user = new User(this.user)
  dialog.componentInstance.userId = this.userId
}
}