import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { createClient } from '@supabase/supabase-js';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

const supabase = createClient(
  'https://fgfmtlvmpmiudjbufrjb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnZm10bHZtcG1pdWRqYnVmcmpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzOTk1MTUsImV4cCI6MjA2NTk3NTUxNX0.RFIiNRunac0E1GhUwE6VKRpTNksW1y-s62GIY3DzGHA'
);

@Component({
  selector: 'app-crear-mensualidad',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './crear-mensualidad.component.html',
  styleUrl: './crear-mensualidad.component.css',
})
export class CrearMensualidadComponent implements OnInit {
  form!: FormGroup;
  estudiantes: any[] = [];
  meses: string[] = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];
 

  constructor(private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar) {}

  async ngOnInit() {
    this.form = this.fb.group({
      estudiante_id: ['', Validators.required],
      anio_lectivo_mensualidad: ['', Validators.required],
      mes: ['', Validators.required],
      monto: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      fecha_pago: ['', Validators.required],
      fecha_vencimiento: ['', Validators.required],
      pagado: ['', Validators.required],
    });

    await this.cargarEstudiantes();
  }

  async cargarEstudiantes() {
    const { data, error } = await supabase
      .from('estudiantes')
      .select('id, nombre, apellidos');

    if (error) {
      console.error(' Error al cargar estudiantes:', error);
    }

    this.estudiantes = data || [];
  }

  async onSubmit() {
    if (this.form.invalid) {
      alert(' Todos los campos son obligatorios.');
      return;
    }

    const now = new Date();

    const mensualidad = {
      estudiante_id: parseInt(this.form.value.estudiante_id),
      anio_lectivo_mensualidad: this.form.value.anio_lectivo_mensualidad,
      mes: this.form.value.mes,
      monto: parseFloat(this.form.value.monto),
      fecha_pago: this.form.value.fecha_pago,
      fecha_vencimiento: this.form.value.fecha_vencimiento,
      pagado: this.form.value.pagado === 'true',
      created_at: now.toISOString(),
      updated_at: now.toISOString(),
      id_eliminar: crypto.randomUUID(), 
    };

    console.log(' Enviando datos a Supabase:', mensualidad);

    const { error } = await supabase
      .from('pagos_mensualidad')
      .insert([mensualidad]);

    if (error) {
      console.error(' Error al registrar mensualidad:', error);
      this.snackBar.open(' Error al registrar mensualidad:\n' + error.message);
    } else {
      this.snackBar.open('Mensualidad registrada correctamente');
      this.router.navigate(['/mensualidades']);
    }
  }
}
