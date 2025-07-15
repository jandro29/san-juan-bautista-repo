import './polyfills.server.mjs';
import {
  MatDividerModule
} from "./chunk-3SUMZUD3.mjs";
import {
  MatIconModule
} from "./chunk-WGNNXXNP.mjs";
import "./chunk-VCVAT64W.mjs";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatPaginator,
  MatPaginatorModule,
  MatRow,
  MatRowDef,
  MatSort,
  MatSortHeader,
  MatSortModule,
  MatTable,
  MatTableDataSource,
  MatTableModule
} from "./chunk-IPMYLLZ3.mjs";
import "./chunk-5SCBKRID.mjs";
import {
  createClient,
  module_exports
} from "./chunk-E6O6SMPR.mjs";
import "./chunk-7V25TRLO.mjs";
import {
  MatButton,
  MatButtonModule,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel
} from "./chunk-RS6UHU6O.mjs";
import "./chunk-4QA35CCS.mjs";
import {
  BarraSuperiorComponent,
  MenuDesplegableComponent
} from "./chunk-RBLOAEOH.mjs";
import {
  Component,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-CXI63PX7.mjs";
import "./chunk-T7QLZL5O.mjs";
import {
  __async
} from "./chunk-DFQCVRK3.mjs";

// src/app/views/pago-mensualidades/pago-mensualidades.component.ts
var _c0 = () => [5, 10, 25, 100];
function PagoMensualidadesComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function PagoMensualidadesComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r1.id);
  }
}
function PagoMensualidadesComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Estudiante ID");
    \u0275\u0275elementEnd();
  }
}
function PagoMensualidadesComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r2.estudiante_id);
  }
}
function PagoMensualidadesComponent_th_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "A\xF1o lectivo");
    \u0275\u0275elementEnd();
  }
}
function PagoMensualidadesComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.anio_lectivo_id);
  }
}
function PagoMensualidadesComponent_th_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Mes");
    \u0275\u0275elementEnd();
  }
}
function PagoMensualidadesComponent_td_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.mes);
  }
}
function PagoMensualidadesComponent_th_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Monto");
    \u0275\u0275elementEnd();
  }
}
function PagoMensualidadesComponent_td_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.monto);
  }
}
function PagoMensualidadesComponent_th_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Fecha de pago");
    \u0275\u0275elementEnd();
  }
}
function PagoMensualidadesComponent_td_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.fecha_pago);
  }
}
function PagoMensualidadesComponent_th_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Fecha de vencimiento");
    \u0275\u0275elementEnd();
  }
}
function PagoMensualidadesComponent_td_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7.fecha_vencimiento);
  }
}
function PagoMensualidadesComponent_th_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Pagado");
    \u0275\u0275elementEnd();
  }
}
function PagoMensualidadesComponent_td_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r8.pagado);
  }
}
function PagoMensualidadesComponent_th_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Creado");
    \u0275\u0275elementEnd();
  }
}
function PagoMensualidadesComponent_td_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.created_at);
  }
}
function PagoMensualidadesComponent_th_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Actualizado");
    \u0275\u0275elementEnd();
  }
}
function PagoMensualidadesComponent_td_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r10.updated_at);
  }
}
function PagoMensualidadesComponent_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 32);
  }
}
function PagoMensualidadesComponent_tr_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 33);
  }
}
var supabaseUrl = "https://fgfmtlvmpmiudjbufrjb.supabase.co";
var supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnZm10bHZtcG1pdWRqYnVmcmpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzOTk1MTUsImV4cCI6MjA2NTk3NTUxNX0.RFIiNRunac0E1GhUwE6VKRpTNksW1y-s62GIY3DzGHA";
var supabase = createClient(supabaseUrl, supabaseKey);
var PagoMensualidadesComponent = class _PagoMensualidadesComponent {
  displayedColumns = [
    "id",
    "estudiante_id",
    "anio_lectivo_id",
    "mes",
    "monto",
    "fecha_pago",
    "fecha_vencimiento",
    "pagado",
    "created_at",
    "updated_at"
  ];
  dataSource = new MatTableDataSource();
  paginator;
  sort;
  ngOnInit() {
    return __async(this, null, function* () {
      console.log("#########ngOnInit se ejecut\xF3");
      const { data, error } = yield supabase.from("pagos_pension").select("*");
      if (error) {
        console.error("#########Error al obtener pagos:", error.message);
      } else {
        console.log("#########Pagos recibidos desde Supabase:", data);
        this.dataSource.data = data || [];
      }
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log("#########Paginator y Sort aplicados");
  }
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  static \u0275fac = function PagoMensualidadesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PagoMensualidadesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PagoMensualidadesComponent, selectors: [["app-pago-mensualidades"]], viewQuery: function PagoMensualidadesComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(MatPaginator, 5);
      \u0275\u0275viewQuery(MatSort, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
    }
  }, decls: 55, vars: 5, consts: [[1, "contenedor", "w-full", "h-screen", "overflow-hidden", "relative"], [1, "flex"], [1, "flex", "h-screen", "w-full", "bg-[#DBE0E6]"], [1, "bg-[#F6F5FF]"], [1, "m-[20px]"], [1, "text-[20px]", "font-bold"], [1, "text-[12px]"], [1, "flex", "w-full", "flex-col", "px-[20px]"], [1, "flex", "items-center", "mb-4"], [1, "w-[80%]"], ["matInput", "", "placeholder", "Ej. Juan", 3, "keyup"], [1, "ml-[10px]"], ["mat-raised-button", "", "color", "primary"], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 1, "w-full", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "estudiante_id"], ["matColumnDef", "anio_lectivo_id"], ["matColumnDef", "mes"], ["matColumnDef", "monto"], ["matColumnDef", "fecha_pago"], ["matColumnDef", "fecha_vencimiento"], ["matColumnDef", "pagado"], ["matColumnDef", "created_at"], ["matColumnDef", "updated_at"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Selector de p\xE1gina", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function PagoMensualidadesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275element(1, "app-barra-superior");
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275element(3, "app-menu-desplegable");
      \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "p", 5);
      \u0275\u0275text(8, "Control de Pagos de Mensualidades");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 6);
      \u0275\u0275text(10, "Registro y seguimiento de pagos mensuales");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "mat-form-field", 9)(14, "mat-label");
      \u0275\u0275text(15, "Filtrar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 10);
      \u0275\u0275listener("keyup", function PagoMensualidadesComponent_Template_input_keyup_16_listener($event) {
        return ctx.applyFilter($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 11)(18, "button", 12);
      \u0275\u0275text(19, "Nuevo Pago");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 13)(21, "table", 14);
      \u0275\u0275elementContainerStart(22, 15);
      \u0275\u0275template(23, PagoMensualidadesComponent_th_23_Template, 2, 0, "th", 16)(24, PagoMensualidadesComponent_td_24_Template, 2, 1, "td", 17);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(25, 18);
      \u0275\u0275template(26, PagoMensualidadesComponent_th_26_Template, 2, 0, "th", 16)(27, PagoMensualidadesComponent_td_27_Template, 2, 1, "td", 17);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(28, 19);
      \u0275\u0275template(29, PagoMensualidadesComponent_th_29_Template, 2, 0, "th", 16)(30, PagoMensualidadesComponent_td_30_Template, 2, 1, "td", 17);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(31, 20);
      \u0275\u0275template(32, PagoMensualidadesComponent_th_32_Template, 2, 0, "th", 16)(33, PagoMensualidadesComponent_td_33_Template, 2, 1, "td", 17);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(34, 21);
      \u0275\u0275template(35, PagoMensualidadesComponent_th_35_Template, 2, 0, "th", 16)(36, PagoMensualidadesComponent_td_36_Template, 2, 1, "td", 17);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(37, 22);
      \u0275\u0275template(38, PagoMensualidadesComponent_th_38_Template, 2, 0, "th", 16)(39, PagoMensualidadesComponent_td_39_Template, 2, 1, "td", 17);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(40, 23);
      \u0275\u0275template(41, PagoMensualidadesComponent_th_41_Template, 2, 0, "th", 16)(42, PagoMensualidadesComponent_td_42_Template, 2, 1, "td", 17);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(43, 24);
      \u0275\u0275template(44, PagoMensualidadesComponent_th_44_Template, 2, 0, "th", 16)(45, PagoMensualidadesComponent_td_45_Template, 2, 1, "td", 17);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(46, 25);
      \u0275\u0275template(47, PagoMensualidadesComponent_th_47_Template, 2, 0, "th", 16)(48, PagoMensualidadesComponent_td_48_Template, 2, 1, "td", 17);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(49, 26);
      \u0275\u0275template(50, PagoMensualidadesComponent_th_50_Template, 2, 0, "th", 16)(51, PagoMensualidadesComponent_td_51_Template, 2, 1, "td", 17);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275template(52, PagoMensualidadesComponent_tr_52_Template, 1, 0, "tr", 27)(53, PagoMensualidadesComponent_tr_53_Template, 1, 0, "tr", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(54, "mat-paginator", 29);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(21);
      \u0275\u0275property("dataSource", ctx.dataSource);
      \u0275\u0275advance(31);
      \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
      \u0275\u0275advance();
      \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
      \u0275\u0275advance();
      \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(4, _c0));
    }
  }, dependencies: [
    MenuDesplegableComponent,
    BarraSuperiorComponent,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatInputModule,
    MatInput,
    MatTableModule,
    MatTable,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatColumnDef,
    MatCellDef,
    MatRowDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatSortModule,
    MatSort,
    MatSortHeader,
    MatPaginatorModule,
    MatPaginator,
    MatButtonModule,
    MatButton,
    MatDividerModule,
    MatIconModule
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagoMensualidadesComponent, [{
    type: Component,
    args: [{ selector: "app-pago-mensualidades", standalone: true, imports: [
      MenuDesplegableComponent,
      BarraSuperiorComponent,
      MatFormFieldModule,
      MatInputModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      MatButtonModule,
      MatDividerModule,
      MatIconModule
    ], template: '<section class="contenedor w-full h-screen overflow-hidden relative">\r\n  <app-barra-superior></app-barra-superior>\r\n\r\n  <div class="flex">\r\n    <app-menu-desplegable></app-menu-desplegable>\r\n\r\n    <div class="flex h-screen w-full bg-[#DBE0E6] ">\r\n      <div class="bg-[#F6F5FF] ">\r\n        <div class="m-[20px]">\r\n          <p class="text-[20px] font-bold">Control de Pagos de Mensualidades</p>\r\n          <p class="text-[12px]">Registro y seguimiento de pagos mensuales</p>\r\n        </div>\r\n\r\n        <div class="flex w-full flex-col px-[20px]">\r\n          <div class="flex items-center mb-4">\r\n            <mat-form-field class="w-[80%]">\r\n              <mat-label>Filtrar</mat-label>\r\n              <input matInput (keyup)="applyFilter($event)" placeholder="Ej. Juan">\r\n            </mat-form-field>\r\n            <div class="ml-[10px]">\r\n              <button mat-raised-button color="primary">Nuevo Pago</button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="mat-elevation-z8">\r\n            <table mat-table [dataSource]="dataSource" matSort class="w-full">\r\n\r\n              <ng-container matColumnDef="id">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>ID</th>\r\n                <td mat-cell *matCellDef="let row">{{ row.id }}</td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef="estudiante_id">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Estudiante ID</th>\r\n                <td mat-cell *matCellDef="let row">{{ row.estudiante_id }}</td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef="anio_lectivo_id">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>A\xF1o lectivo</th>\r\n                <td mat-cell *matCellDef="let row">{{ row.anio_lectivo_id }}</td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef="mes">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Mes</th>\r\n                <td mat-cell *matCellDef="let row">{{ row.mes }}</td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef="monto">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Monto</th>\r\n                <td mat-cell *matCellDef="let row">{{ row.monto }}</td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef="fecha_pago">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Fecha de pago</th>\r\n                <td mat-cell *matCellDef="let row">{{ row.fecha_pago }}</td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef="fecha_vencimiento">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Fecha de vencimiento</th>\r\n                <td mat-cell *matCellDef="let row">{{ row.fecha_vencimiento }}</td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef="pagado">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Pagado</th>\r\n                <td mat-cell *matCellDef="let row">{{ row.pagado }}</td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef="created_at">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Creado</th>\r\n                <td mat-cell *matCellDef="let row">{{ row.created_at }}</td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef="updated_at">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Actualizado</th>\r\n                <td mat-cell *matCellDef="let row">{{ row.updated_at }}</td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r\n              <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>\r\n            </table>\r\n          </div>\r\n\r\n          <mat-paginator [pageSizeOptions]="[5, 10, 25, 100]" aria-label="Selector de p\xE1gina"></mat-paginator>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n' }]
  }], null, { paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }], sort: [{
    type: ViewChild,
    args: [MatSort]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PagoMensualidadesComponent, { className: "PagoMensualidadesComponent", filePath: "src/app/views/pago-mensualidades/pago-mensualidades.component.ts", lineNumber: 36 });
})();
export {
  PagoMensualidadesComponent
};
//# sourceMappingURL=chunk-COZ6QJ3D.mjs.map
