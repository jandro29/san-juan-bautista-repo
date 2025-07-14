import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

const supabaseUrl = 'https://fgfmtlvmpmiudjbufrjb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnZm10bHZtcG1pdWRqYnVmcmpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzOTk1MTUsImV4cCI6MjA2NTk3NTUxNX0.RFIiNRunac0E1GhUwE6VKRpTNksW1y-s62GIY3DzGHA';
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

@Component({
  selector: 'app-estudiantes',
  standalone: true,
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css'],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ]
})
export class EstudiantesComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      dni: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]{8}$/)]
      ],
      fecha_nacimiento: ['', Validators.required],
      grado: [''],
      apoderado: [''],
    });
  }

  async onSubmit() {
    // mensajes de error en los campos
    this.form.markAllAsTouched();

    if (this.form.valid) {
      const formData = {
        ...this.form.value,
        fecha_nacimiento: this.formatDate(this.form.value.fecha_nacimiento),
      };

      const { error } = await supabase.from('estudiantes').insert([formData]);

      if (error) {
        alert('Error al registrar: ' + error.message);
      } else {
        alert('Estudiante registrado con éxito!!!');
        this.form.reset();
      }
    }
  }

  private formatDate(date: Date): string {
    return new Date(date).toISOString().split('T')[0];
  }

  soloNumeros(event: KeyboardEvent) {
    const inputChar = String.fromCharCode(event.keyCode);
    if (!/^[0-9]+$/.test(inputChar)) {
      event.preventDefault();
    }
  }
}
