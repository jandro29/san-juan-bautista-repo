import './polyfills.server.mjs';
import {
  MatIcon,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-CXI63PX7.mjs";
import "./chunk-T7QLZL5O.mjs";
import {
  __async
} from "./chunk-DFQCVRK3.mjs";

// src/app/views/reportes/reportes.component.ts
var _c0 = () => [5, 10, 25, 100];
function ReportesComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, " ID ");
    \u0275\u0275elementEnd();
  }
}
function ReportesComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r2.id);
  }
}
function ReportesComponent_th_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, " Estudiante ");
    \u0275\u0275elementEnd();
  }
}
function ReportesComponent_td_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r3.estudiante, " ");
  }
}
function ReportesComponent_th_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, " Tipo ");
    \u0275\u0275elementEnd();
  }
}
function ReportesComponent_td_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.tipo_pago, " ");
  }
}
function ReportesComponent_th_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, " Monto ");
    \u0275\u0275elementEnd();
  }
}
function ReportesComponent_td_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" S/. ", row_r5.monto, " ");
  }
}
function ReportesComponent_th_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, " Estado ");
    \u0275\u0275elementEnd();
  }
}
function ReportesComponent_td_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.estado);
  }
}
function ReportesComponent_th_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, " Fecha Pago ");
    \u0275\u0275elementEnd();
  }
}
function ReportesComponent_td_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r7.fecha_pago || "No registrada", " ");
  }
}
function ReportesComponent_th_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, " Fecha Vencimiento ");
    \u0275\u0275elementEnd();
  }
}
function ReportesComponent_td_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r8.fecha_vencimiento || "No definida", " ");
  }
}
function ReportesComponent_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 31);
  }
}
function ReportesComponent_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 32);
  }
}
var supabaseUrl = "https://fgfmtlvmpmiudjbufrjb.supabase.co";
var supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnZm10bHZtcG1pdWRqYnVmcmpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzOTk1MTUsImV4cCI6MjA2NTk3NTUxNX0.RFIiNRunac0E1GhUwE6VKRpTNksW1y-s62GIY3DzGHA";
var supabase = createClient(supabaseUrl, supabaseKey);
var ReportesComponent = class _ReportesComponent {
  displayedColumns = [
    "id",
    "estudiante",
    "tipo_pago",
    "monto",
    "estado",
    "fecha_pago",
    "fecha_vencimiento"
  ];
  dataSource = new MatTableDataSource();
  paginator;
  sort;
  ngOnInit() {
    return __async(this, null, function* () {
      console.log("Cargando reportes de pagos...");
      const [matricula, pension] = yield Promise.all([
        supabase.from("pagos_matricula").select("id, estudiante_id, monto, pagado, fecha_pago, fecha_vencimiento, created_at"),
        supabase.from("pagos_pension").select("id, estudiante_id, monto, pagado, fecha_pago, fecha_vencimiento, created_at")
      ]);
      if (matricula.error) {
        console.error("Error en matr\xEDcula:", matricula.error.message);
      }
      if (pension.error) {
        console.error("Error en pensi\xF3n:", pension.error.message);
      }
      const pagosMatricula = (matricula.data ?? []).map((p) => ({
        id: p.id,
        estudiante: `ID: ${p.estudiante_id}`,
        tipo_pago: "Matr\xEDcula",
        monto: Number(p.monto),
        estado: p.pagado ? "Pagado" : "Pendiente",
        fecha_pago: p.fecha_pago,
        fecha_vencimiento: p.fecha_vencimiento,
        created_at: p.created_at
      }));
      const pagosPension = (pension.data ?? []).map((p) => ({
        id: p.id,
        estudiante: `ID: ${p.estudiante_id}`,
        tipo_pago: "Mensualidad",
        monto: Number(p.monto),
        estado: p.pagado ? "Pagado" : "Pendiente",
        fecha_pago: p.fecha_pago,
        fecha_vencimiento: p.fecha_vencimiento,
        created_at: p.created_at
      }));
      const datosUnificados = [...pagosMatricula, ...pagosPension];
      datosUnificados.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      this.dataSource.data = datosUnificados;
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  exportarPDF() {
    console.log("Exportando PDF...");
  }
  imprimir() {
    window.print();
  }
  static \u0275fac = function ReportesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportesComponent, selectors: [["app-reportes"]], viewQuery: function ReportesComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(MatPaginator, 5);
      \u0275\u0275viewQuery(MatSort, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
    }
  }, decls: 53, vars: 5, consts: [["input", ""], [1, "contenedor", "w-full", "h-screen", "overflow-hidden", "relative"], [1, "flex"], [1, "flex", "h-screen", "w-full", "bg-[#DBE0E6]", "items-center", "justify-center"], [1, "bg-[#F6F5FF]", "w-[950px]"], [1, "m-[20px]"], [1, "flex", "flex-row"], [1, "grid", "grid-cols-6", "gap-4"], [1, "text-[48px]", "font-bold", "col-start-1", "col-end-4"], ["mat-raised-button", "", 1, "col-span-1", "bg-[#FF9800]", "text-white", 3, "click"], ["mat-raised-button", "", 1, "col-span-1", "bg-[#9C27B0]", "text-white", 3, "click"], [1, "flex", "w-full", "mt-[40px]", "grid"], [1, "flex", "w-full", "flex-col"], ["matInput", "", "placeholder", "Ej. Juan, Matr\xEDcula, Pagado", 3, "keyup"], ["aria-label", "Selector de p\xE1gina", 3, "pageSizeOptions"], [1, "h-[370px]", "overflow-y-auto"], [1, "mat-elevation-z8", "w-full"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "estudiante"], ["matColumnDef", "tipo_pago"], ["matColumnDef", "monto"], ["matColumnDef", "estado"], ["matColumnDef", "fecha_pago"], ["matColumnDef", "fecha_vencimiento"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function ReportesComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "section", 1);
      \u0275\u0275element(1, "app-barra-superior");
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275element(3, "app-menu-desplegable");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "p", 8);
      \u0275\u0275text(10, " REPORTE PAGOS ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 9);
      \u0275\u0275listener("click", function ReportesComponent_Template_button_click_11_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.exportarPDF());
      });
      \u0275\u0275elementStart(12, "mat-icon");
      \u0275\u0275text(13, "picture_as_pdf");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " PDF ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 10);
      \u0275\u0275listener("click", function ReportesComponent_Template_button_click_15_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.imprimir());
      });
      \u0275\u0275elementStart(16, "mat-icon");
      \u0275\u0275text(17, "print");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " IMPRIMIR ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 11)(20, "div", 12)(21, "mat-form-field")(22, "mat-label");
      \u0275\u0275text(23, "Filtrar por estudiante, tipo, estado...");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "input", 13, 0);
      \u0275\u0275listener("keyup", function ReportesComponent_Template_input_keyup_24_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.applyFilter($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275element(26, "mat-paginator", 14);
      \u0275\u0275elementStart(27, "div", 15)(28, "div", 16)(29, "table", 17);
      \u0275\u0275elementContainerStart(30, 18);
      \u0275\u0275template(31, ReportesComponent_th_31_Template, 2, 0, "th", 19)(32, ReportesComponent_td_32_Template, 2, 1, "td", 20);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(33, 21);
      \u0275\u0275template(34, ReportesComponent_th_34_Template, 2, 0, "th", 19)(35, ReportesComponent_td_35_Template, 2, 1, "td", 20);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(36, 22);
      \u0275\u0275template(37, ReportesComponent_th_37_Template, 2, 0, "th", 19)(38, ReportesComponent_td_38_Template, 2, 1, "td", 20);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(39, 23);
      \u0275\u0275template(40, ReportesComponent_th_40_Template, 2, 0, "th", 19)(41, ReportesComponent_td_41_Template, 2, 1, "td", 20);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(42, 24);
      \u0275\u0275template(43, ReportesComponent_th_43_Template, 2, 0, "th", 19)(44, ReportesComponent_td_44_Template, 2, 1, "td", 20);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(45, 25);
      \u0275\u0275template(46, ReportesComponent_th_46_Template, 2, 0, "th", 19)(47, ReportesComponent_td_47_Template, 2, 1, "td", 20);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(48, 26);
      \u0275\u0275template(49, ReportesComponent_th_49_Template, 2, 0, "th", 19)(50, ReportesComponent_td_50_Template, 2, 1, "td", 20);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275template(51, ReportesComponent_tr_51_Template, 1, 0, "tr", 27)(52, ReportesComponent_tr_52_Template, 1, 0, "tr", 28);
      \u0275\u0275elementEnd()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(26);
      \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(4, _c0));
      \u0275\u0275advance(3);
      \u0275\u0275property("dataSource", ctx.dataSource);
      \u0275\u0275advance(22);
      \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
      \u0275\u0275advance();
      \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
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
    MatIconModule,
    MatIcon
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportesComponent, [{
    type: Component,
    args: [{ selector: "app-reportes", standalone: true, imports: [
      MenuDesplegableComponent,
      BarraSuperiorComponent,
      MatFormFieldModule,
      MatInputModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      MatButtonModule,
      MatIconModule
    ], template: '<section class="contenedor w-full h-screen overflow-hidden relative">\r\n  <app-barra-superior></app-barra-superior>\r\n\r\n  <div class="flex">\r\n    <app-menu-desplegable></app-menu-desplegable>\r\n\r\n    <div class="flex h-screen w-full bg-[#DBE0E6] items-center justify-center">\r\n      <div class="bg-[#F6F5FF] w-[950px]">\r\n        <div class="m-[20px]">\r\n          <div class="flex flex-row">\r\n            <div class="grid grid-cols-6 gap-4">\r\n              <p class="text-[48px] font-bold col-start-1 col-end-4">\r\n                REPORTE PAGOS\r\n              </p>\r\n              <button\r\n                mat-raised-button\r\n                class="col-span-1 bg-[#FF9800] text-white"\r\n                (click)="exportarPDF()"\r\n              >\r\n                <mat-icon>picture_as_pdf</mat-icon>\r\n                PDF\r\n              </button>\r\n              <button\r\n                mat-raised-button\r\n                class="col-span-1 bg-[#9C27B0] text-white"\r\n                (click)="imprimir()"\r\n              >\r\n                <mat-icon>print</mat-icon>\r\n                IMPRIMIR\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="flex w-full mt-[40px] grid">\r\n            <div class="flex w-full flex-col">\r\n              <mat-form-field>\r\n                <mat-label>Filtrar por estudiante, tipo, estado...</mat-label>\r\n                <input\r\n                  matInput\r\n                  (keyup)="applyFilter($event)"\r\n                  placeholder="Ej. Juan, Matr\xEDcula, Pagado"\r\n                  #input\r\n                />\r\n              </mat-form-field>\r\n\r\n              <mat-paginator\r\n                [pageSizeOptions]="[5, 10, 25, 100]"\r\n                aria-label="Selector de p\xE1gina"\r\n              ></mat-paginator>\r\n\r\n              <div class="h-[370px] overflow-y-auto">\r\n                <div class="mat-elevation-z8 w-full">\r\n                  <table mat-table [dataSource]="dataSource" matSort>\r\n                    <!-- ID -->\r\n                    <ng-container matColumnDef="id">\r\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                        ID\r\n                      </th>\r\n                      <td mat-cell *matCellDef="let row">{{ row.id }}</td>\r\n                    </ng-container>\r\n\r\n                    <!-- Estudiante -->\r\n                    <ng-container matColumnDef="estudiante">\r\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                        Estudiante\r\n                      </th>\r\n                      <td mat-cell *matCellDef="let row">\r\n                        {{ row.estudiante }}\r\n                      </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Tipo -->\r\n                    <ng-container matColumnDef="tipo_pago">\r\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                        Tipo\r\n                      </th>\r\n                      <td mat-cell *matCellDef="let row">\r\n                        {{ row.tipo_pago }}\r\n                      </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Monto -->\r\n                    <ng-container matColumnDef="monto">\r\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                        Monto\r\n                      </th>\r\n                      <td mat-cell *matCellDef="let row">\r\n                        S/. {{ row.monto }}\r\n                      </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Estado -->\r\n                    <ng-container matColumnDef="estado">\r\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                        Estado\r\n                      </th>\r\n                      <td mat-cell *matCellDef="let row">{{ row.estado }}</td>\r\n                    </ng-container>\r\n\r\n                    <!-- Fecha de pago -->\r\n                    <ng-container matColumnDef="fecha_pago">\r\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                        Fecha Pago\r\n                      </th>\r\n                      <td mat-cell *matCellDef="let row">\r\n                        {{ row.fecha_pago || "No registrada" }}\r\n                      </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Fecha de vencimiento -->\r\n                    <ng-container matColumnDef="fecha_vencimiento">\r\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                        Fecha Vencimiento\r\n                      </th>\r\n                      <td mat-cell *matCellDef="let row">\r\n                        {{ row.fecha_vencimiento || "No definida" }}\r\n                      </td>\r\n                    </ng-container>\r\n\r\n                    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r\n                    <tr\r\n                      mat-row\r\n                      *matRowDef="let row; columns: displayedColumns"\r\n                    ></tr>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n' }]
  }], null, { paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }], sort: [{
    type: ViewChild,
    args: [MatSort]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportesComponent, { className: "ReportesComponent", filePath: "src/app/views/reportes/reportes.component.ts", lineNumber: 49 });
})();
export {
  ReportesComponent
};
//# sourceMappingURL=chunk-Y742NNNV.mjs.map
