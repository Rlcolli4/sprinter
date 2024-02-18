import { Component } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: UntypedFormGroup = new UntypedFormGroup({
    username: new UntypedFormControl("", [Validators.required]),
    password: new UntypedFormControl("", [Validators.required]),
  });

  loading: boolean = false;
  passwordType: string = "password";

  onLoginSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.getRawValue());
      console.log("Submit Called");
      this.loading = true;
    }
  }
}
