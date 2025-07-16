import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MenuDesplegableComponent } from '../menu-desplegable/menu-desplegable.component';
import { BarraSuperiorComponent } from '../barra-superior/barra-superior.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { createClient } from '@supabase/supabase-js';
import { RouterModule } from '@angular/router'; 


const supabaseUrl = "https://fgfmtlvmpmiudjbufrjb.supabase.co";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnZm10bHZtcG1pdWRqYnVmcmpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzOTk1MTUsImV4cCI6MjA2NTk3NTUxNX0.RFIiNRunac0E1GhUwE6VKRpTNksW1y-s62GIY3DzGHA';
const supabase = createClient(supabaseUrl, supabaseKey);

@Component({
  selector: 'app-pago-matriculas',
  imports: [
    MenuDesplegableComponent,
    BarraSuperiorComponent,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    RouterModule 
  ],
  templateUrl: './pago-matriculas.component.html',
  styleUrl: './pago-matriculas.component.css'
})
export class PagoMatriculasComponent {
  displayedColumns: string[] = [
    'id', 'estudiante_id', 'anio_lectivo', 'monto',
    'fecha_pago', 'fecha_vencimiento', 'pagado',
    'created_at', 'updated_at', 'acciones' 
  ];

  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  async ngOnInit() {
    console.log('#########ngOnInit se ejecutó');

    const { data, error } = await supabase
      .from('pagos_matricula')
      .select('*'); // Asegúrate que "id_borrar" esté en los datos

    if (error) {
      console.error('#########Error al obtener pagos:', error.message);
    } else {
      console.log('#########Pagos recibidos desde Supabase:', data);
      this.dataSource.data = data || [];
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log('#########Paginator y Sort aplicados');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async eliminarPago(id_borrar: string) {
    const confirmar = confirm('¿Estás seguro de eliminar este pago?');
    if (!confirmar) return;

    const { error } = await supabase
      .from('pagos_matricula')
      .delete()
      .eq('id_borrar', id_borrar);

    if (error) {
      console.error('Error al eliminar matrícula:', error.message);
      alert('No se pudo eliminar la matrícula');
    } else {
      this.dataSource.data = this.dataSource.data.filter(pago => pago.id_borrar !== id_borrar);
      alert('Matrícula eliminada con éxito');
    }
  }
}
