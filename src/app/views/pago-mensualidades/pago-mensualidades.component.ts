import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { createClient } from '@supabase/supabase-js';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BarraSuperiorComponent } from '../barra-superior/barra-superior.component';
import { MenuDesplegableComponent } from '../menu-desplegable/menu-desplegable.component';
import { RouterModule } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

const supabaseUrl = 'https://fgfmtlvmpmiudjbufrjb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnZm10bHZtcG1pdWRqYnVmcmpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzOTk1MTUsImV4cCI6MjA2NTk3NTUxNX0.RFIiNRunac0E1GhUwE6VKRpTNksW1y-s62GIY3DzGHA';
const supabase = createClient(supabaseUrl, supabaseKey);

@Component({
  selector: 'app-pago-mensualidades',
  templateUrl: './pago-mensualidades.component.html',
  styleUrls: ['./pago-mensualidades.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    BarraSuperiorComponent,
    MenuDesplegableComponent,
    RouterModule,
    MatIconModule
  ],
})
export class PagoMensualidadesComponent {
  displayedColumns: string[] = [
    'id',
    'estudiante_id',
    'anio_lectivo_mensualidad',
    'mes',
    'monto',
    'fecha_pago',
    'fecha_vencimiento',
    'pagado',
    'created_at',
    'updated_at',
    'acciones',
  ];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.obtenerPagos();
  }


  constructor(

    private snackBar: MatSnackBar
  ) {}
  async obtenerPagos() {
    const { data, error } = await supabase
      .from('pagos_mensualidad')
      .select('id, estudiante_id, anio_lectivo_mensualidad, mes, monto, fecha_pago, fecha_vencimiento, pagado, created_at, updated_at, id_eliminar');

    if (error) {
      console.error('Error al obtener pagos:', error.message);
      return;
    }

    this.dataSource.data = data || [];
    this.dataSource.paginator = this.paginator;
  }

  async eliminarPago(id_eliminar: string) {
    const confirmar = confirm('¿Estás seguro de eliminar este pago mensual?');
    if (!confirmar) return;

    const { error } = await supabase
      .from('pagos_mensualidad')
      .delete()
      .eq('id_eliminar', id_eliminar);

    if (error) {
      console.error('Error al eliminar pago mensual:', error.message);
      this.snackBar.open('No se pudo eliminar el pago mensual', 'Cerrar', { duration: 7000 });
    } else {
      this.dataSource.data = this.dataSource.data.filter(
        (pago) => pago.id_eliminar !== id_eliminar
      );
      this.snackBar.open('Pago mensual eliminado con éxito', 'Cerrar', { duration: 3000 });
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
