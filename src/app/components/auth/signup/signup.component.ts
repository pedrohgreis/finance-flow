import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [ReactiveFormsModule]
})
export class SignupComponent {
    private fb = inject(FormBuilder);

    form = this.fb.group({
        name: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\s]+$/)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
        terms: [false, Validators.requiredTrue],
    },
        {
            validators: this.samePassword
        }
    )

    samePassword(control: AbstractControl){
        const password = control.get('password')?.value;
        const confirmPassword = control.get('confirmPassword')?.value;

        if(confirmPassword != password){
            return {passwordsNotMatch: true}
        }

        return null;
    }

    onSubmit(){
        if(this.form.invalid){
            this.form.markAllAsTouched();
            return;
        }

    }
}
