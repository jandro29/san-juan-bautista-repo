import { Component, ViewChild, OnInit } from '@angular/core';
import { MenuDesplegableComponent } from '../../menu-desplegable/menu-desplegable.component';
import { BarraSuperiorComponent } from '../../barra-superior/barra-superior.component';
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
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

const supabaseUrl = "https://fgfmtlvmpmiudjbufrjb.supabase.co";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnZm10bHZtcG1pdWRqYnVmcmpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzOTk1MTUsImV4cCI6MjA2NTk3NTUxNX0.RFIiNRunac0E1GhUwE6VKRpTNksW1y-s62GIY3DzGHA';
const supabase = createClient(supabaseUrl, supabaseKey);

@Component({
  selector: 'app-inicial',
  standalone: true,
  imports: [
    MenuDesplegableComponent,
    BarraSuperiorComponent,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    RouterModule,
    MatIconModule,
    MatSnackBarModule,
    CommonModule
  ],
  templateUrl: './inicial.component.html',
  styleUrl: './inicial.component.css',
})
export class InicialComponent implements OnInit {
  displayedColumns: string[] = [
    'id', 'alumno', 'apoderado', 'matricula',
    'marzo', 'abril', 'mayo', 'junio', 'julio',
    'agosto', 'sept', 'octubre', 'noviembre',
    'diciembre', 'total_pago', 'created_at'
  ];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private snackBar: MatSnackBar) {}

  async ngOnInit() {
    const { data, error } = await supabase.from('inicial').select('*');

    if (error) {
      console.error('Error al obtener datos:', error.message);
      this.snackBar.open('Error al obtener datos de Supabase.', 'Cerrar', { duration: 4000 });
    } else {
      this.dataSource = new MatTableDataSource(data || []);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
