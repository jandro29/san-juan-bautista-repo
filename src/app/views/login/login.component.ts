import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormGroupDirective,
  NgForm,
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule
  ]
})
// ... [todos los imports sin cambios]

export class LoginComponent {
  loginForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  hide = signal(true);


  emailDebeContenerArrobaValidator(control: FormControl) {
  const valor = control.value;
  if (valor && !valor.includes('@')) {
    return { sinArroba: true };
  }
  return null;
}

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, this.emailDebeContenerArrobaValidator]],
      password: ['', Validators.required]
    });
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    // Limpiar y normalizar email y password
    const email = this.loginForm.value.email.trim().toLowerCase();
    const password = this.loginForm.value.password.trim();

    console.log(' Enviando login a la API...');
    console.log('Email:', `"${email}"`);
    console.log('Password:', `"${password}"`);

    this.http.post('http://localhost:3000/api/login', { email, password }).subscribe({
      next: (res: any) => {
        console.log(' Login exitoso:', res);
        alert('Login exitoso');
        this.router.navigate(['/inicio-control-de-pagos']);
      },
      error: (error: HttpErrorResponse) => {
        console.error(' Error al iniciar sesión:', error);
        if (error.status === 401) {
          alert('Credenciales incorrectas');
        } else if (error.status === 404) {
          alert('No se encontró la ruta /api/login. Verifica la URL.');
        } else {
          alert('Error del servidor, revisa la consola para más detalles');
        }
      }
    });
  }
}
