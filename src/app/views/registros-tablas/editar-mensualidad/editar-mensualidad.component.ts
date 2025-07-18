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
  selector: 'app-editar-mensualidad',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './editar-mensualidad.component.html',
  styleUrl: './editar-mensualidad.component.css'
})
export class EditarMensualidadComponent implements OnInit {
  form!: FormGroup;
  id_borrar!: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  async ngOnInit() {
    this.id_borrar = this.route.snapshot.paramMap.get('id_borrar') || '';

    const { data, error } = await supabase
      .from('pagos_mensualidad')
      .select('*')
      .eq('id_eliminar', this.id_borrar)
      .single();

    if (error || !data) {
      this.snackBar.open('No se pudo cargar la mensualidad', 'Cerrar', {
        duration: 3000,
        panelClass: ['snackbar-error']
      });
      return;
    }

    this.form = this.fb.group({
      estudiante_id: [data.estudiante_id],
      anio_lectivo_mensualidad: [data.anio_lectivo_mensualidad],
      mes: [data.mes],
      monto: [data.monto],
      fecha_pago: [data.fecha_pago],
      fecha_vencimiento: [data.fecha_vencimiento],
      pagado: [data.pagado],
    });
  }

  async onSubmit() {
    const { error } = await supabase
      .from('pagos_mensualidad')
      .update({
        ...this.form.value,
        updated_at: new Date().toISOString(), // Actualiza la fecha
      })
      .eq('id_eliminar', this.id_borrar);

    if (error) {
      this.snackBar.open('Error al actualizar la mensualidad', 'Cerrar', {
        duration: 3000,
        panelClass: ['snackbar-error']
      });
    } else {
      this.snackBar.open('Mensualidad actualizada correctamente', '', {
        duration: 3000,
        panelClass: ['snackbar-success']
      });
      this.router.navigate(['/mensualidades']);
    }
  }
}
