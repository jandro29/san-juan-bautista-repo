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
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

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
    RouterModule,
    MatSnackBarModule
  ]
})
export class LoginComponent {
  loginForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  hide = signal(true);

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, this.emailDebeContenerArrobaValidator]],
      password: ['', Validators.required]
    });
  }

  emailDebeContenerArrobaValidator(control: FormControl) {
    const valor = control.value;
    if (valor && !valor.includes('@')) {
      return { sinArroba: true };
    }
    return null;
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  onSubmit(event: Event) {
    event.preventDefault(); 


    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const email = this.loginForm.value.email.trim().toLowerCase();
    const password = this.loginForm.value.password.trim();

    
    this.http.post('http://localhost:3000/api/login', { email, password }).subscribe({
      next: (res: any) => {
        console.log('Login exitoso:', res);
        this.snackBar.open('Login exitoso!', '', {
          duration: 3000,
          panelClass: ['snackbar-success']
        });
        this.router.navigate(['/inicio-control-de-pagos']);
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error al iniciar sesión:', error);
        let message = 'Error desconocido. Revisa la consola.';
        if (error.status === 401) {
          message = 'Credenciales incorrectas';
        } else if (error.status === 404) {
          message = '⚠️ Ruta /api/login no encontrada';
        }
        this.snackBar.open(message, 'Cerrar', {
          duration: 4000,
          panelClass: ['snackbar-error']
        });
      }
    });
  }
}
