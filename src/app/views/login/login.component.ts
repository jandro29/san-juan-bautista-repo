import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const { email, password } = this.form.value;

    // ✅ Aquí está la URL corregida
    this.http.post('https://sjb-backend.onrender.com/api/login', { email, password }).subscribe({
      next: (res: any) => {
        console.log('Login exitoso:', res);

        this.snackBar.open('¡Login exitoso!', '', {
          duration: 3000,
          panelClass: ['snackbar-success']
        });

        // ✅ Redirige al dashboard o componente principal
        this.router.navigate(['/inicio-control-de-pagos']);
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error al iniciar sesión:', error);

        let message = 'Error desconocido. Revisa la consola.';

        if (error.status === 401) {
          message = 'Correo o contraseña incorrecta';
        } else if (error.status === 0) {
          message = 'No se puede conectar al servidor';
        } else if (error.status === 404) {
          message = 'Ruta /api/login no encontrada en el backend';
        }

        this.snackBar.open(message, 'Cerrar', {
          duration: 4000,
          panelClass: ['snackbar-error']
        });
      }
    });
  }
}
