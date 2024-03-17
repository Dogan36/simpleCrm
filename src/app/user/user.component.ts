import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import { MatCardModule } from '@angular/material/card';
import { Firestore, collection, onSnapshot, doc, collectionData } from '@angular/fire/firestore';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule, MatIcon, MatTooltipModule, MatDialogModule, MatCardModule, RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
 
  user = new User()
users:any = []
  constructor(public dialog: MatDialog, private firestore: Firestore,  public router: Router) { }

  ngOnInit(): void {
    const usersCollectionRef = collection(this.firestore, 'users');
    collectionData(usersCollectionRef, { idField: 'id' })
      .subscribe((users) => {
        this.users = users;
        console.log('Received changes from DB', users);
      });
  }


  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }


}
