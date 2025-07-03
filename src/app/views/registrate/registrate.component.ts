import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router'; // ✅ Importar Router
import { createClient } from '@supabase/supabase-js';
import * as bcrypt from 'bcryptjs';

const supabase = createClient(
  'https://fgfmtlvmpmiudjbufrjb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnZm10bHZtcG1pdWRqYnVmcmpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzOTk1MTUsImV4cCI6MjA2NTk3NTUxNX0.RFIiNRunac0E1GhUwE6VKRpTNksW1y-s62GIY3DzGHA'
);

@Component({
  selector: 'app-registrate',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './registrate.component.html',
  styleUrl: './registrate.component.css'
})
export class RegistrateComponent {
  hidePassword = true;
  hideConfirm = true;
  registerForm: FormGroup;

  private router = inject(Router); // ✅ Inyectamos el Router

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        correo: ['', [Validators.required, Validators.email, Validators.pattern(/@.*\.com$/)]],
        contraseña: ['', [Validators.required, this.passwordValidator]],
        confirmarContraseña: ['', Validators.required]
      },
      { validators: this.matchPasswords }
    );
  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    const hasUpperCase = /[A-Z]/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const hasMinLength = value.length >= 8;

    return hasUpperCase && hasSpecialChar && hasMinLength
      ? null
      : { passwordStrength: true };
  }

  matchPasswords(group: AbstractControl): ValidationErrors | null {
    const pass = group.get('contraseña')?.value;
    const confirm = group.get('confirmarContraseña')?.value;
    return pass === confirm ? null : { passwordsDontMatch: true };
  }

  async registrarUsuario() {
    if (this.registerForm.invalid) {
      alert('❌ Formulario inválido');
      return;
    }

    const { correo, contraseña } = this.registerForm.value;
    const hashedPassword = bcrypt.hashSync(contraseña, 10);

    const { error } = await supabase.from('usuarios').insert([
      {
        email: correo,
        password_hash: hashedPassword
      }
    ]);

    if (error) {
      alert('❌ Error al registrar: ' + error.message);
    } else {
      alert('✅ Usuario registrado correctamente');

      this.registerForm.reset();
      Object.keys(this.registerForm.controls).forEach(key => {
        this.registerForm.get(key)?.setErrors(null);
      });

      // ✅ Redirigir al inicio
      this.router.navigateByUrl('/'); // o '/#' si usas rutas con hash
    }
  }
}
