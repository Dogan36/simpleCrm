import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogActions, MatDialogRef } from '@angular/material/dialog';

import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { Firestore, setDoc, doc} from '@angular/fire/firestore';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatDialogActions, MatInput, MatButton, MatDatepickerModule, FormsModule, MatProgressBarModule],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent {
  constructor(private firestore: Firestore, public dialogRef: MatDialogRef<DialogEditAddressComponent>){}
  user!: User;
  userId!:any
loading=false
saveUser() {

  this.loading = true
  setDoc(doc(this.firestore, "users", this.userId), { ...this.user }).then((result: any) => {
    this.loading = false;
    this.dialogRef.close()
  });
}
}
