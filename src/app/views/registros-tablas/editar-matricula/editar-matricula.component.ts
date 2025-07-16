import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { createClient } from '@supabase/supabase-js';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

const supabase = createClient(
  'https://fgfmtlvmpmiudjbufrjb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnZm10bHZtcG1pdWRqYnVmcmpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzOTk1MTUsImV4cCI6MjA2NTk3NTUxNX0.RFIiNRunac0E1GhUwE6VKRpTNksW1y-s62GIY3DzGHA'
);

@Component({
  selector: 'app-editar-matricula',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatSnackBarModule,
    CommonModule
  ],
  templateUrl: './editar-matricula.component.html',
  styleUrl: './editar-matricula.component.css',
})
export class EditarMatriculaComponent implements OnInit {
  form!: FormGroup;
  id_borrar!: string;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  async ngOnInit() {
    this.id_borrar = this.route.snapshot.paramMap.get('id_borrar')!;
    this.form = this.fb.group({
      anio_lectivo: [''],
      monto: [''],
      fecha_pago: [''],
      fecha_vencimiento: [''],
      pagado: ['']
    });

    const { data, error } = await supabase
      .from('pagos_matricula')
      .select('*')
      .eq('id_borrar', this.id_borrar)
      .single();

    if (error || !data) {
      console.error('Error al obtener datos:', error?.message);
      this.snackBar.open('Error al obtener los datos de matrícula', 'Cerrar', {
        duration: 4000,
        panelClass: ['snackbar-error']
      });
      return;
    }

    this.form.patchValue(data);
  }

  async actualizarMatricula() {
    const { error } = await supabase
      .from('pagos_matricula')
      .update(this.form.value)
      .eq('id_borrar', this.id_borrar);

    if (error) {
      console.error('Error al actualizar matrícula:', error.message);
      this.snackBar.open('Error al actualizar matrícula', 'Cerrar', {
        duration: 4000,
        panelClass: ['snackbar-error']
      });
    } else {
      this.snackBar.open('Matrícula actualizada correctamente', '', {
        duration: 3000,
        panelClass: ['snackbar-success']
      });
      this.router.navigate(['/matriculas']);
    }
  }
}
