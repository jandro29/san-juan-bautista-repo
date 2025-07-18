import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { createClient } from '@supabase/supabase-js';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

const supabase = createClient(
  'https://fgfmtlvmpmiudjbufrjb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnZm10bHZtcG1pdWRqYnVmcmpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzOTk1MTUsImV4cCI6MjA2NTk3NTUxNX0.RFIiNRunac0E1GhUwE6VKRpTNksW1y-s62GIY3DzGHA'
);

@Component({
  selector: 'app-crear-matricula',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './crear-matricula.component.html',
  styleUrl: './crear-matricula.component.css',
})
export class CrearMatriculaComponent implements OnInit {
  form!: FormGroup;
  estudiantes: any[] = [];
  anios: any[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  async ngOnInit() {
    this.form = this.fb.group({
      estudiante_id: [''],
      anio_lectivo: [''],
      monto: [''],
      fecha_pago: [''],
      fecha_vencimiento: [''],
      pagado: ['false'],
    });

    await this.cargarEstudiantes();
    await this.cargarAnios();
  }

  async cargarEstudiantes() {
    const { data } = await supabase.from('estudiantes').select('id, nombre, apellidos');
    this.estudiantes = data || [];
  }

  async cargarAnios() {
    const { data } = await supabase.from('anios_lectivos').select('id, anio').order('anio', { ascending: false });
    this.anios = data || [];
  }

  async crearAnioLectivo() {
    const nuevoAnio = new Date().getFullYear();
    const { error } = await supabase.from('anios_lectivos').insert({ anio: nuevoAnio });

    if (error) {
      this.snackBar.open('❌ Error al crear año lectivo', 'Cerrar', { duration: 3000 });
    } else {
      this.snackBar.open(`✅ Año ${nuevoAnio} agregado`, 'Cerrar', { duration: 3000 });
      await this.cargarAnios();
    }
  }

  async onSubmit() {
    const now = new Date().toISOString();

    const { error } = await supabase.from('pagos_matricula').insert({
      ...this.form.value,
      created_at: now,
      updated_at: now,
    });

    if (error) {
      console.error('❌ Error al registrar matrícula:', error.message);
      this.snackBar.open('❌ Error al registrar matrícula', 'Cerrar', { duration: 3000 });
    } else {
      this.snackBar.open('✅ Matrícula registrada correctamente', 'Cerrar', { duration: 3000 });
      setTimeout(() => this.router.navigate(['/matriculas']), 1500);
    }
  }
}
