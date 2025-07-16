import { Component, ViewChild, OnInit } from '@angular/core';
import { MenuDesplegableComponent } from '../menu-desplegable/menu-desplegable.component';
import { BarraSuperiorComponent } from '../barra-superior/barra-superior.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { createClient } from '@supabase/supabase-js';
import { RouterModule } from '@angular/router';

const supabaseUrl = "https://fgfmtlvmpmiudjbufrjb.supabase.co";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnZm10bHZtcG1pdWRqYnVmcmpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzOTk1MTUsImV4cCI6MjA2NTk3NTUxNX0.RFIiNRunac0E1GhUwE6VKRpTNksW1y-s62GIY3DzGHA';
const supabase = createClient(supabaseUrl, supabaseKey);

@Component({
  selector: 'app-interna-estudiantes',
  standalone: true,
  imports: [
    MenuDesplegableComponent,
    BarraSuperiorComponent,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    RouterModule
  ],
  templateUrl: './interna-estudiantes.component.html',
  styleUrl: './interna-estudiantes.component.css',
})
export class InternaEstudiantesComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'nombre',
    'apellidos',
    'dni',
    'fecha_nacimiento',
    'grado',
    'apoderado',
    'acciones',
  ];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  async ngOnInit() {
    const { data, error } = await supabase.from('estudiantes').select('*');

    if (error) {
      console.error('❌ Error al obtener estudiantes:', error.message);
    } else {
      this.dataSource = new MatTableDataSource(data || []);
      this.dataSource.paginator = this.paginator; // ✅ Conexión de paginador
      this.dataSource.sort = this.sort;           // ✅ Conexión de ordenamiento
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async eliminarEstudiante(id_borrar: string) {
    const confirmar = confirm('¿Estás seguro de eliminar este estudiante?');
    if (!confirmar) return;

    const { error } = await supabase
      .from('estudiantes')
      .delete()
      .eq('id_borrar', id_borrar);

    if (error) {
      console.error('❌ Error al eliminar estudiante:', error.message);
      alert('Ocurrió un error al eliminar.');
    } else {
      this.dataSource.data = this.dataSource.data.filter(est => est.id_borrar !== id_borrar);
      alert('✅ Estudiante eliminado correctamente.');
    }
  }
}
