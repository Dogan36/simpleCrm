import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogActions, MatDialogRef } from '@angular/material/dialog';
import { MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc, DocumentReference, } from '@angular/fire/firestore';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {  } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatInputModule, MatFormFieldModule, MatDialogActions, MatHint, MatInput, MatButton, MatDatepickerModule, FormsModule, MatProgressBarModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {
  constructor(private firestore: Firestore, public dialogRef: MatDialogRef<DialogAddUserComponent>) { }

  user = new User();
  birthDate: Date | undefined;
  onNoClick() { };
loading = false;

  saveUser() {
    if (this.birthDate) {
      this.user.birthDate = this.birthDate.getTime()
    }
    this.loading = true
    addDoc(collection(this.firestore, "users"), { ...this.user }).then((result:any) => {
      this.loading=false;
      this.dialogRef.close()
    });

  }
}
