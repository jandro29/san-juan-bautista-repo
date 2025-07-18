import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
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
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { createClient } from '@supabase/supabase-js';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


const supabaseUrl = 'https://fgfmtlvmpmiudjbufrjb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnZm10bHZtcG1pdWRqYnVmcmpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzOTk1MTUsImV4cCI6MjA2NTk3NTUxNX0.RFIiNRunac0E1GhUwE6VKRpTNksW1y-s62GIY3DzGHA';
const supabase = createClient(supabaseUrl, supabaseKey);

// Definimos una interfaz para el tipo de dato unificado
interface PagoReporte {
  id: number;
  estudiante: string;
  tipo_pago: string;
  monto: number;
  estado: string;
  fecha_pago: string | null;
  fecha_vencimiento: string;
  created_at: string;
}

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [
    MenuDesplegableComponent,
    BarraSuperiorComponent,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css',
})
export class ReportesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'estudiante',
    'tipo_pago',
    'monto',
    'estado',
    'fecha_pago',
    'fecha_vencimiento',
  ];
  dataSource = new MatTableDataSource<PagoReporte>();

  @ViewChild('tablaReportes', { static: false }) tablaReportes!: ElementRef;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  async ngOnInit() {
    console.log('Cargando reportes de pagos...');

    const [matricula, pension] = await Promise.all([
      supabase
        .from('pagos_matricula')
        .select(
          'id, estudiante_id, monto, pagado, fecha_pago, fecha_vencimiento, created_at'
        ),
      supabase
        .from('pagos_pension')
        .select(
          'id, estudiante_id, monto, pagado, fecha_pago, fecha_vencimiento, created_at'
        ),
    ]);

    if (matricula.error) {
      console.error('Error en matrícula:', matricula.error.message);
    }
    if (pension.error) {
      console.error('Error en pensión:', pension.error.message);
    }

    const pagosMatricula: PagoReporte[] = (matricula.data ?? []).map((p) => ({
      id: p.id,
      estudiante: `ID: ${p.estudiante_id}`,
      tipo_pago: 'Matrícula',
      monto: Number(p.monto),
      estado: p.pagado ? 'Pagado' : 'Pendiente',
      fecha_pago: p.fecha_pago,
      fecha_vencimiento: p.fecha_vencimiento,
      created_at: p.created_at,
    }));

    const pagosPension: PagoReporte[] = (pension.data ?? []).map((p) => ({
      id: p.id,
      estudiante: `ID: ${p.estudiante_id}`,
      tipo_pago: 'Mensualidad',
      monto: Number(p.monto),
      estado: p.pagado ? 'Pagado' : 'Pendiente',
      fecha_pago: p.fecha_pago,
      fecha_vencimiento: p.fecha_vencimiento,
      created_at: p.created_at,
    }));

    const datosUnificados: PagoReporte[] = [...pagosMatricula, ...pagosPension];

    // Ordenar por fecha de creación (más recientes primero)
    datosUnificados.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );

    this.dataSource.data = datosUnificados;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  exportarPDF() {
  const doc = new jsPDF();

  const columnas = [
    { header: 'ID', dataKey: 'id' },
    { header: 'Estudiante', dataKey: 'estudiante' },
    { header: 'Tipo de Pago', dataKey: 'tipo_pago' },
    { header: 'Monto', dataKey: 'monto' },
    { header: 'Estado', dataKey: 'estado' },
    { header: 'Fecha de Pago', dataKey: 'fecha_pago' },
    { header: 'Fecha de Vencimiento', dataKey: 'fecha_vencimiento' },
  ];

  const datos = this.dataSource.data.map((pago) => ({
    id: pago.id,
    estudiante: pago.estudiante,
    tipo_pago: pago.tipo_pago,
    monto: pago.monto.toFixed(2),
    estado: pago.estado,
    fecha_pago: pago.fecha_pago ?? '—',
    fecha_vencimiento: pago.fecha_vencimiento,
  }));

  autoTable(doc, {
    columns: columnas,
    body: datos,
    styles: { fontSize: 8 },
    headStyles: { fillColor: [41, 128, 185] },
    margin: { top: 20 },
  });

  doc.save('reporte_pagos.pdf');
}

  imprimir() {
     const tablaHTML = this.tablaReportes.nativeElement.innerHTML;
  const ventana = window.open('', '', 'height=600,width=800');

  if (ventana) {
    ventana.document.write('<html><head><title>Imprimir Reporte</title>');
    ventana.document.write('<style>table { width: 100%; border-collapse: collapse; } th, td { border: 1px solid #ccc; padding: 8px; }</style>');
    ventana.document.write('</head><body>');
    ventana.document.write(tablaHTML);
    ventana.document.write('</body></html>');
    ventana.document.close();
    ventana.print();
  }
  }
}
