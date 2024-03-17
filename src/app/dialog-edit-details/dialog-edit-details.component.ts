import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogActions, MatDialogRef } from '@angular/material/dialog';

import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { Firestore, setDoc, collection, } from '@angular/fire/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { doc } from 'firebase/firestore';

@Component({
  selector: 'app-dialog-edit-details',
  providers: [provideNativeDateAdapter()],
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatDialogActions, MatInput, MatButton, MatDatepickerModule, FormsModule, MatProgressBarModule, MatDatepickerModule,],
  templateUrl: './dialog-edit-details.component.html',
  styleUrl: './dialog-edit-details.component.scss'
})
export class DialogEditDetailsComponent {
  constructor(private firestore: Firestore, public dialogRef: MatDialogRef<DialogEditDetailsComponent>) { }
  user!: User;
  userId!:any
  loading = false;
  birthDate: Date | undefined;

  saveUser() {
    if (this.birthDate) {
      this.user.birthDate = this.birthDate.getTime()
    }
    this.loading = true
    setDoc(doc(this.firestore, "users", this.userId), { ...this.user }).then((result: any) => {
      this.loading = false;
      this.dialogRef.close()
    });
  }
}
