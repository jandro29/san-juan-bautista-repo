import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { createClient } from '@supabase/supabase-js';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

const supabase = createClient(
  'https://fgfmtlvmpmiudjbufrjb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnZm10bHZtcG1pdWRqYnVmcmpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzOTk1MTUsImV4cCI6MjA2NTk3NTUxNX0.RFIiNRunac0E1GhUwE6VKRpTNksW1y-s62GIY3DzGHA'
);

@Component({
  selector: 'app-editar-estudiantes',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './editar-estudiantes.component.html',
  styleUrl: './editar-estudiantes.component.css',
})
export class EditarEstudiantesComponent implements OnInit {
  form!: FormGroup;
  id_borrar!: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar // ✅ Inyectamos MatSnackBar
  ) {}

  async ngOnInit() {
    this.id_borrar = this.route.snapshot.paramMap.get('id_borrar') || '';

    const { data, error } = await supabase
      .from('estudiantes')
      .select('*')
      .eq('id_borrar', this.id_borrar)
      .single();

    if (error || !data) {
      this.snackBar.open('❌ No se pudo cargar el estudiante', 'Cerrar', {
        duration: 3000,
        panelClass: ['snackbar-error']
      });
      return;
    }

    this.form = this.fb.group({
      nombre: [data.nombre],
      apellidos: [data.apellidos],
      dni: [data.dni],
      fecha_nacimiento: [data.fecha_nacimiento],
      grado: [data.grado],
      apoderado: [data.apoderado],
    });
  }

  async onSubmit() {
    const { error } = await supabase
      .from('estudiantes')
      .update(this.form.value)
      .eq('id_borrar', this.id_borrar);

    if (error) {
      this.snackBar.open('❌ Error al actualizar', 'Cerrar', {
        duration: 3000,
        panelClass: ['snackbar-error']
      });
    } else {
      this.snackBar.open('✅ Estudiante actualizado correctamente', '', {
        duration: 3000,
        panelClass: ['snackbar-success']
      });
      this.router.navigate(['/estudiantes']);
    }
  }
}
