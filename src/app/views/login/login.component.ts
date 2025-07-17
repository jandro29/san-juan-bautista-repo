import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormGroupDirective,
  NgForm,
  ReactiveFormsModule
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// ✅ Módulos necesarios
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatError } from '@angular/material/form-field';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  standalone: true, // ✅ Necesario si no estás usando un módulo
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ // ✅ Importa todo lo necesario
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class LoginComponent {
  loginForm: FormGroup;
  hide = true;
  matcher = new MyErrorStateMatcher();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.http.post<any>('/api/login', { email, password }).subscribe({
        next: (response) => {
          if (response.success) {
            console.log('Login exitoso');
            this.router.navigate(['/inicio-control-de-pagos']);
          } else {
            alert('Credenciales incorrectas');
          }
        },
        error: (error) => {
          console.error('Error en la petición', error);
          alert('Error al conectar con el servidor');
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
